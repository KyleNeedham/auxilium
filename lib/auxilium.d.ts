export declare namespace num {
    /**
     * Convert a string number representation into a number.
     */
    function parse(num: number | string): number;
    /**
     * Remove all none numeric characters.
     */
    function numeric(amount: number | string): number;
    /**
     * Format a number adding a seperator.
     */
    function format(amount: number | string, seperator?: string): string;
    /**
     * Format a mixed string into a currency format.
     */
    function currency(amount: number, symbol?: string): string;
    function percent(num: number, places?: number): string;
}
export declare namespace obj {
    /**
     * Get a property from an object using dot notation.
     */
    function get(obj: Object, notation: string): any;
}
export declare namespace str {
    /**
     * Capitalize the first character and make the rest lower case.
     */
    function capitalize(str: string): string;
    function capitalizeWords(str: string): string;
    /**
     * Split a string at the first occurence of a specific character.
     */
    function splitAt(str: string, character: string): string[];
    /**
     * Shorten a string to a certain length.
     */
    function shorten(str: string, length: number, append?: string): string;
    function snakeToCamel(str: string): string;
}
export declare namespace regex {
    /** Matches a valid email according to W3C HTML5 spec */
    const EMAIL: string;
    /** Matches a URL */
    const URL: string;
    /**
     * Helper method to get a RegExp instancee.
     */
    function get(name: string, flags?: string): RegExp;
}
declare var _default: {
    num: typeof num;
    str: typeof str;
    obj: typeof obj;
    regex: typeof regex;
};
export default _default;
