import {
  num,
  obj,
  str,
  regex
} from 'fundbay-auxilium';

describe('Number Helper', () => {
  describe('number formatting', () => {
    it('should format a number', () => {
      expect(num.format(1000000)).toEqual('1,000,000');
    });
    it('should format a number string', () => {
      expect(num.format('1000000')).toEqual('1,000,000');
    });
    it('should format a number string with none numeric characters', () => {
      expect(num.format('"1,000,000"')).toEqual('1,000,000');
    });
    it('should format a negative number', () => {
      expect(num.format(-1000000)).toEqual('-1,000,000');
    });
    it('should format a number with a decimal', () => {
      expect(num.format('1000000.01')).toEqual('1,000,000.01');
    });
  });

  describe('number currency formatting', () => {
    it('should format a number and prepend the currency symbol', () => {
      expect(num.currency(1000000, '$')).toEqual('$1,000,000');
    });
  });

  describe('number parsing', () => {
    it('should parse a string number', () => {
      expect(num.parse('1000')).toEqual(1000);
    });
    it('should parse a string float', () => {
      expect(num.parse('100.00')).toEqual(100.00);
    });
  });

  describe('number percentage formatting', () => {
    it('should commafy a number and append percent symbol', () => {
      expect(num.percent(99)).toEqual('99%');
    });
    it('should display decimal points', () => {
      expect(num.percent(100.56, 2)).toEqual('100.56%');
    });
    it('should work from strings', () => {
      expect(num.percent(0.56)).toEqual('0.56%');
    });
    it('should round up and down properly', () => {
      expect(num.percent(0.54, 1)).toEqual('0.5%');
      expect(num.percent(0.56, 1)).toEqual('0.6%');
    });
  });
});

describe('Object Helper', () => {
  const object = {
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

  it('should get a property using a dot notation string', () => {
    expect(obj.get(object, 'apples.are')).toEqual('Nice');
    expect(obj.get(object, 'strawberries.are.nice')).toEqual('As well');
    expect(obj.get(object, 'bananas.are')).toEqual(['nice', 'tasty']);
  });
});

describe('String Helper', () => {
  it('should capitalize just one word', () => {
    expect(str.capitalize('hey')).toEqual('Hey');
  });
  it('should only capitalize first one word', () => {
    expect(str.capitalize('hey wassup')).toEqual('Hey wassup');
  });
  it('should capitalize all words', () => {
    expect(str.capitalizeWords('hey wassup')).toEqual('Hey Wassup');
  });
  it('should shorten the string and add a continue marker', () => {
    expect(str.shorten('hey you', 3, '...')).toEqual('hey...');
  });
  it('should return blank when string is empty', () => {
    expect(str.shorten('hey you', 3, '...')).toEqual('hey...');
  });
  it('should not append the "append" argument when string doesnt reach length criteria', () => {
    expect(str.shorten('hey', 3, '...')).toEqual('hey');
  });
});

describe('Regex Helper', () => {
  const emails = [
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

  const urls = [
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

  describe('Email Regex', () => {
    emails.forEach((email) => {
      it(`should match [${email}]`, () => {
        expect(regex.get('email').test(email)).toBe(true);
      });
    });
  });

  describe('URL Regex', () => {
    urls.forEach((url) => {
      it(`should match [${url}]`, () => {
        expect(regex.get('url').test(url)).toBe(true);
      });
    });
  });
});
