export namespace num {
  /**
   * Convert a string number representation into a number.
   */
  export function parse(num: number | string) {
    return +num;
  }

  /**
   * Remove all none numeric characters.
   */
  export function numeric(amount: number | string): number {
    return parse(`${amount}`.replace(/[^\d.-]/g, ''));
  }

  /**
   * Format a number adding a seperator.
   */
  export function format(amount: number | string, seperator: string = ','): string {
    return `${numeric(amount)}`.replace(/\B(?=(\d{3})+(?!\d))/g, seperator);
  }

  /**
   * Format a mixed string into a currency format.
   */
  export function currency(amount: number, symbol: string = '&pound;'): string {
    return `${symbol}${format(amount)}`;
  }

  export function percent(num: number, places: number = 2): string {
    if (`${num}`.indexOf('.') !== -1) {
      return `${format(parse(num).toFixed(places))}%`;
    } else {
      return `${format(parse(num))}%`;
    }
  }
}

export namespace obj {
  /**
   * Get a property from an object using dot notation.
   */
  export function get(obj: Object, notation: string): any {
    return notation.split('.').reduce((segment, property) => {
      if (segment) {
        return segment[property];
      }
    }, obj);
  }
}

export namespace str {
  /**
   * Capitalize the first character and make the rest lower case.
   */
  export function capitalize(str: string): string {
    return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
  }

  export function capitalizeWords(str: string): string {
    return ((str.split(' ')).map(capitalize)).join(' ');
  }

  /**
   * Split a string at the first occurence of a specific character.
   */
  export function splitAt(str: string, character: string): string[] {
    const splitted = str.split(character);

    return [
      splitted[0],
      str.substr(splitted[0].length + 1)
    ];
  }

  /**
   * Shorten a string to a certain length.
   */
  export function shorten(str: string, length: number, append: string = '...'): string {
    if (str.length > length) {
      return `${str.substring(length, 0)}${append}`;
    } else {
      return str;
    }
  }
}

export namespace regex {
  /** Matches a valid email according to W3C HTML5 spec */
  export const EMAIL = '^[a-zA-Z0-9.!#$%&\'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$';
  /** Matches a URL */
  export const URL = '^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$';

  /**
   * Helper method to get a RegExp instancee.
   */
  export function get(name: string, flags?: string): RegExp {
    return new RegExp(regex[name], flags);
  }
}

export default {
  num,
  str,
  obj,
  regex
}
