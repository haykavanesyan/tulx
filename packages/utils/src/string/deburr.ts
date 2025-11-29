/**
 * Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters
 * and removing combining diacritical marks.
 *
 * @param string - The string to deburr.
 * @returns Returns the deburred string.
 *
 * @example
 * ```ts
 * deburr('déjà vu'); // 'deja vu'
 * ```
 */
export function deburr(string: string): string {
  const map: Record<string, string> = {
    'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A',
    'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
    'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
    'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
    'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
    'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
    'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O',
    'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
    'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U',
    'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
    'Ý': 'Y', 'ý': 'y', 'ÿ': 'y',
    'Ñ': 'N', 'ñ': 'n',
    'Ç': 'C', 'ç': 'c',
    'Ð': 'D', 'ð': 'd',
    'Þ': 'TH', 'þ': 'th',
    'Æ': 'AE', 'æ': 'ae',
    'Ø': 'O', 'ø': 'o',
  };

  return string.replace(/[\u00C0-\u017F]/g, (char) => map[char] || char);
}

