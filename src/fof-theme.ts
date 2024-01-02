
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const FofTheme: CustomThemeConfig = {
    name: 'fof-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "var(--color-secondary-900)",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "var(--color-primary-50)",
        "--on-success": "var(--color-secondary-800)",
        "--on-warning": "var(--color-secondary-800)",
        "--on-error": "255 255 255",
        "--on-surface": "var(--color-secondary-800)",
        // =~= Theme Colors  =~=
        // primary | #95C6C3 
        "--color-primary-50": "239 246 246", // #eff6f6
        "--color-primary-100": "234 244 243", // #eaf4f3
        "--color-primary-200": "229 241 240", // #e5f1f0
        "--color-primary-300": "213 232 231", // #d5e8e7
        "--color-primary-400": "181 215 213", // #b5d7d5
        "--color-primary-500": "149 198 195", // #95C6C3
        "--color-primary-600": "134 178 176", // #86b2b0
        "--color-primary-700": "112 149 146", // #709592
        "--color-primary-800": "89 119 117", // #597775
        "--color-primary-900": "73 97 96", // #496160
        // secondary | #7B6079 
        "--color-secondary-50": "235 231 235", // #ebe7eb
        "--color-secondary-100": "229 223 228", // #e5dfe4
        "--color-secondary-200": "222 215 222", // #ded7de
        "--color-secondary-300": "202 191 201", // #cabfc9
        "--color-secondary-400": "163 144 161", // #a390a1
        "--color-secondary-500": "123 96 121", // #7B6079
        "--color-secondary-600": "111 86 109", // #6f566d
        "--color-secondary-700": "92 72 91", // #5c485b
        "--color-secondary-800": "74 58 73", // #4a3a49
        "--color-secondary-900": "60 47 59", // #3c2f3b
        // tertiary | #DE8971 
        "--color-tertiary-50": "250 237 234", // #faedea
        "--color-tertiary-100": "248 231 227", // #f8e7e3
        "--color-tertiary-200": "247 226 220", // #f7e2dc
        "--color-tertiary-300": "242 208 198", // #f2d0c6
        "--color-tertiary-400": "232 172 156", // #e8ac9c
        "--color-tertiary-500": "222 137 113", // #DE8971
        "--color-tertiary-600": "200 123 102", // #c87b66
        "--color-tertiary-700": "167 103 85", // #a76755
        "--color-tertiary-800": "133 82 68", // #855244
        "--color-tertiary-900": "109 67 55", // #6d4337
        // success | #d2fbbf 
        "--color-success-50": "248 254 245", // #f8fef5
        "--color-success-100": "246 254 242", // #f6fef2
        "--color-success-200": "244 254 239", // #f4feef
        "--color-success-300": "237 253 229", // #edfde5
        "--color-success-400": "224 252 210", // #e0fcd2
        "--color-success-500": "210 251 191", // #d2fbbf
        "--color-success-600": "189 226 172", // #bde2ac
        "--color-success-700": "158 188 143", // #9ebc8f
        "--color-success-800": "126 151 115", // #7e9773
        "--color-success-900": "103 123 94", // #677b5e
        // warning | #fbdb7b 
        "--color-warning-50": "254 250 235", // #fefaeb
        "--color-warning-100": "254 248 229", // #fef8e5
        "--color-warning-200": "254 246 222", // #fef6de
        "--color-warning-300": "253 241 202", // #fdf1ca
        "--color-warning-400": "252 230 163", // #fce6a3
        "--color-warning-500": "251 219 123", // #fbdb7b
        "--color-warning-600": "226 197 111", // #e2c56f
        "--color-warning-700": "188 164 92", // #bca45c
        "--color-warning-800": "151 131 74", // #97834a
        "--color-warning-900": "123 107 60", // #7b6b3c
        // error | #d35865 
        "--color-error-50": "248 230 232", // #f8e6e8
        "--color-error-100": "246 222 224", // #f6dee0
        "--color-error-200": "244 213 217", // #f4d5d9
        "--color-error-300": "237 188 193", // #edbcc1
        "--color-error-400": "224 138 147", // #e08a93
        "--color-error-500": "211 88 101", // #d35865
        "--color-error-600": "190 79 91", // #be4f5b
        "--color-error-700": "158 66 76", // #9e424c
        "--color-error-800": "127 53 61", // #7f353d
        "--color-error-900": "103 43 49", // #672b31
        // surface | #FAEBE0 
        "--color-surface-50": "254 252 250", // #fefcfa
        "--color-surface-100": "254 251 249", // #fefbf9
        "--color-surface-200": "254 250 247", // #fefaf7
        "--color-surface-300": "253 247 243", // #fdf7f3
        "--color-surface-400": "252 241 233", // #fcf1e9
        "--color-surface-500": "250 235 224", // #FAEBE0
        "--color-surface-600": "225 212 202", // #e1d4ca
        "--color-surface-700": "188 176 168", // #bcb0a8
        "--color-surface-800": "150 141 134", // #968d86
        "--color-surface-900": "123 115 110", // #7b736e

    }
}