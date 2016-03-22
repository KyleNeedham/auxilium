define(["require", "exports", 'fundbay-auxilium'], function (require, exports, fundbay_auxilium_1) {
    "use strict";
    describe('Number Helper', function () {
        describe('number formatting', function () {
            it('should format a number', function () {
                expect(fundbay_auxilium_1.num.format(1000000)).toEqual('1,000,000');
            });
            it('should format a number string', function () {
                expect(fundbay_auxilium_1.num.format('1000000')).toEqual('1,000,000');
            });
            it('should format a number string with none numeric characters', function () {
                expect(fundbay_auxilium_1.num.format('"1,000,000"')).toEqual('1,000,000');
            });
            it('should format a negative number', function () {
                expect(fundbay_auxilium_1.num.format(-1000000)).toEqual('-1,000,000');
            });
            it('should format a number with a decimal', function () {
                expect(fundbay_auxilium_1.num.format('1000000.01')).toEqual('1,000,000.01');
            });
        });
        describe('number currency formatting', function () {
            it('should format a number and prepend the currency symbol', function () {
                expect(fundbay_auxilium_1.num.currency(1000000, '$')).toEqual('$1,000,000');
            });
        });
        describe('number parsing', function () {
            it('should parse a string number', function () {
                expect(fundbay_auxilium_1.num.parse('1000')).toEqual(1000);
            });
            it('should parse a string float', function () {
                expect(fundbay_auxilium_1.num.parse('100.00')).toEqual(100.00);
            });
        });
        describe('number percentage formatting', function () {
            it('should commafy a number and append percent symbol', function () {
                expect(fundbay_auxilium_1.num.percent(99)).toEqual('99%');
            });
            it('should display decimal points', function () {
                expect(fundbay_auxilium_1.num.percent(100.56, 2)).toEqual('100.56%');
            });
            it('should work from strings', function () {
                expect(fundbay_auxilium_1.num.percent(0.56)).toEqual('0.56%');
            });
            it('should round up and down properly', function () {
                expect(fundbay_auxilium_1.num.percent(0.54, 1)).toEqual('0.5%');
                expect(fundbay_auxilium_1.num.percent(0.56, 1)).toEqual('0.6%');
            });
        });
    });
    describe('Object Helper', function () {
        var object = {
            apples: {
                are: 'Nice'
            },
            strawberries: {
                are: {
                    nice: 'As well'
                }
            },
            bananas: {
                are: ['nice', 'tasty']
            }
        };
        it('should get a property using a dot notation string', function () {
            expect(fundbay_auxilium_1.obj.get(object, 'apples.are')).toEqual('Nice');
            expect(fundbay_auxilium_1.obj.get(object, 'strawberries.are.nice')).toEqual('As well');
            expect(fundbay_auxilium_1.obj.get(object, 'bananas.are')).toEqual(['nice', 'tasty']);
        });
    });
    describe('String Helper', function () {
        it('should capitalize just one word', function () {
            expect(fundbay_auxilium_1.str.capitalize('hey')).toEqual('Hey');
        });
        it('should only capitalize first one word', function () {
            expect(fundbay_auxilium_1.str.capitalize('hey wassup')).toEqual('Hey wassup');
        });
        it('should capitalize all words', function () {
            expect(fundbay_auxilium_1.str.capitalizeWords('hey wassup')).toEqual('Hey Wassup');
        });
        it('should shorten the string and add a continue marker', function () {
            expect(fundbay_auxilium_1.str.shorten('hey you', 3, '...')).toEqual('hey...');
        });
        it('should return blank when string is empty', function () {
            expect(fundbay_auxilium_1.str.shorten('hey you', 3, '...')).toEqual('hey...');
        });
        it('should not append the "append" argument when string doesnt reach length criteria', function () {
            expect(fundbay_auxilium_1.str.shorten('hey', 3, '...')).toEqual('hey');
        });
    });
    describe('Regex Helper', function () {
        var emails = [
            'email@email.com',
            'email.another@email.com',
            'email+another@email.com',
            'email+another@email-another.com',
            'email@127.0.0.1',
            'email.email@email.com',
            'email@email.email.com',
            'email@email.co.uk',
            'email@email.org.uk'
        ];
        var urls = [
            'http://domain.com',
            'https://domain.com',
            'http://wwww.domain.com',
            'https://www.domain.com',
            'http://domain.com/path',
            'https://domain.com/path',
            'domain.com',
            'www.domain.com',
            'sub.domain.com',
            'https://sub.domain.com',
            'http://sub.domain.com'
        ];
        describe('Email Regex', function () {
            emails.forEach(function (email) {
                it("should match [" + email + "]", function () {
                    expect(fundbay_auxilium_1.regex.get('email').test(email)).toBe(true);
                });
            });
        });
        describe('URL Regex', function () {
            urls.forEach(function (url) {
                it("should match [" + url + "]", function () {
                    expect(fundbay_auxilium_1.regex.get('url').test(url)).toBe(true);
                });
            });
        });
    });
});
