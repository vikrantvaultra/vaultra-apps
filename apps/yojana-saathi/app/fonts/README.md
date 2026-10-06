`rupee-inter.woff2` and `rupee-jakarta.woff2` are subsets of the variable fonts
[Inter](https://github.com/rsms/inter) and [Plus Jakarta Sans](https://github.com/tokotype/PlusJakartaSans)
containing only the Indian rupee sign (U+20B9), so pages don't download whole latin-ext subsets for one glyph.
Both fonts are licensed under the SIL Open Font License 1.1.

Regenerate with fontTools:

    pyftsubset "Inter[opsz,wght].ttf" --unicodes=U+20B9 --flavor=woff2 --layout-features='' --no-hinting --output-file=rupee-inter.woff2
    pyftsubset "PlusJakartaSans[wght].ttf" --unicodes=U+20B9 --flavor=woff2 --layout-features='' --no-hinting --output-file=rupee-jakarta.woff2
