import StringUtility from './StringUtility';
import CaseConverterEnum from '../constants/CaseConverterEnum';

describe('StringUtility', () => {
    let testStrings: string[] = [];

    beforeEach(() => {
        testStrings = ['lives-Down_by-the.River', 'Lives`Down,by~the RIVER'];
    });

    afterEach(() => {
        testStrings = [];
    });

    describe('toCase', () => {
        test(`should pass ${CaseConverterEnum.CamelCase}`, () => {
            const expectedResult: string = 'livesDownByTheRiver';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.CamelCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.ConstantCase}`, () => {
            const expectedResult: string = 'LIVES_DOWN_BY_THE_RIVER';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.ConstantCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.DotCase}`, () => {
            const expectedResult: string = 'lives.down.by.the.river';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.DotCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.KebabCase}`, () => {
            const expectedResult: string = 'lives-down-by-the-river';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.KebabCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.LowerCase}`, () => {
            const expectedResult: string = 'livesdownbytheriver';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.LowerCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.PascalCase}`, () => {
            const expectedResult: string = 'LivesDownByTheRiver';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.PascalCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.PathCase}`, () => {
            const expectedResult: string = 'lives/down/by/the/river';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.PathCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.SentenceCase}`, () => {
            const expectedResult: string = 'Lives down by the river';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.SentenceCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.SnakeCase}`, () => {
            const expectedResult: string = 'lives_down_by_the_river';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.SnakeCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.TitleCase}`, () => {
            const expectedResult: string = 'Lives Down By The River';

            testStrings.forEach((str: string) => {
                expect(StringUtility.toCase(str, CaseConverterEnum.TitleCase)).toEqual(expectedResult);
            });
        });

        test(`should pass ${CaseConverterEnum.None}`, () => {
            testStrings.forEach((str: string) => {
                const expectedResult: string = str;

                expect(StringUtility.toCase(str, CaseConverterEnum.None)).toEqual(expectedResult);
            });
        });
    });

    describe('isString', () => {
        it('should return true.', () => {
            const actualResult = StringUtility.isString('str');
            const expectedResult = true;

            expect(actualResult).toBe(expectedResult);
        });

        it('should return false.', () => {
            const falseItems = [undefined, null, true, false, 0, 1, {}, {prop: 'data'}];
            const expectedResult = false;

            falseItems.forEach((value) => {
                expect(StringUtility.isString(value)).toEqual(expectedResult);
            });
        });
    });
});
