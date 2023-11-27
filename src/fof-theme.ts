
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
        "--on-primary": "var(--color-secondary-50)",
        "--on-secondary": "var(--color-primary-800)",
        "--on-tertiary": "var(--color-primary-700)",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "var(--color-primary-900)",
        "--on-surface": "var(--color-primary-800)",
        // =~= Theme Colors  =~=
        // primary | #7B6079 
        "--color-primary-50": "235 231 235", // #ebe7eb
        "--color-primary-100": "229 223 228", // #e5dfe4
        "--color-primary-200": "222 215 222", // #ded7de
        "--color-primary-300": "202 191 201", // #cabfc9
        "--color-primary-400": "163 144 161", // #a390a1
        "--color-primary-500": "123 96 121", // #7B6079
        "--color-primary-600": "111 86 109", // #6f566d
        "--color-primary-700": "92 72 91", // #5c485b
        "--color-primary-800": "74 58 73", // #4a3a49
        "--color-primary-900": "60 47 59", // #3c2f3b
        // secondary | #A7D0CD 
        "--color-secondary-50": "242 248 248", // #f2f8f8
        "--color-secondary-100": "237 246 245", // #edf6f5
        "--color-secondary-200": "233 243 243", // #e9f3f3
        "--color-secondary-300": "220 236 235", // #dceceb
        "--color-secondary-400": "193 222 220", // #c1dedc
        "--color-secondary-500": "167 208 205", // #A7D0CD
        "--color-secondary-600": "150 187 185", // #96bbb9
        "--color-secondary-700": "125 156 154", // #7d9c9a
        "--color-secondary-800": "100 125 123", // #647d7b
        "--color-secondary-900": "82 102 100", // #526664
        // tertiary | #FAEBE0 
        "--color-tertiary-50": "254 252 250", // #fefcfa
        "--color-tertiary-100": "254 251 249", // #fefbf9
        "--color-tertiary-200": "254 250 247", // #fefaf7
        "--color-tertiary-300": "253 247 243", // #fdf7f3
        "--color-tertiary-400": "252 241 233", // #fcf1e9
        "--color-tertiary-500": "250 235 224", // #FAEBE0
        "--color-tertiary-600": "225 212 202", // #e1d4ca
        "--color-tertiary-700": "188 176 168", // #bcb0a8
        "--color-tertiary-800": "150 141 134", // #968d86
        "--color-tertiary-900": "123 115 110", // #7b736e
        // success | #DE8971 
        "--color-success-50": "250 237 234", // #faedea
        "--color-success-100": "248 231 227", // #f8e7e3
        "--color-success-200": "247 226 220", // #f7e2dc
        "--color-success-300": "242 208 198", // #f2d0c6
        "--color-success-400": "232 172 156", // #e8ac9c
        "--color-success-500": "222 137 113", // #DE8971
        "--color-success-600": "200 123 102", // #c87b66
        "--color-success-700": "167 103 85", // #a76755
        "--color-success-800": "133 82 68", // #855244
        "--color-success-900": "109 67 55", // #6d4337
        // warning | #ffdab9 
        "--color-warning-50": "255 249 245", // #fff9f5
        "--color-warning-100": "255 248 241", // #fff8f1
        "--color-warning-200": "255 246 238", // #fff6ee
        "--color-warning-300": "255 240 227", // #fff0e3
        "--color-warning-400": "255 229 206", // #ffe5ce
        "--color-warning-500": "255 218 185", // #ffdab9
        "--color-warning-600": "230 196 167", // #e6c4a7
        "--color-warning-700": "191 164 139", // #bfa48b
        "--color-warning-800": "153 131 111", // #99836f
        "--color-warning-900": "125 107 91", // #7d6b5b
        // error | #ed65a9 
        "--color-error-50": "252 232 242", // #fce8f2
        "--color-error-100": "251 224 238", // #fbe0ee
        "--color-error-200": "251 217 234", // #fbd9ea
        "--color-error-300": "248 193 221", // #f8c1dd
        "--color-error-400": "242 147 195", // #f293c3
        "--color-error-500": "237 101 169", // #ed65a9
        "--color-error-600": "213 91 152", // #d55b98
        "--color-error-700": "178 76 127", // #b24c7f
        "--color-error-800": "142 61 101", // #8e3d65
        "--color-error-900": "116 49 83", // #743153
        // surface | #f3cfb4 
        "--color-surface-50": "253 248 244", // #fdf8f4
        "--color-surface-100": "253 245 240", // #fdf5f0
        "--color-surface-200": "252 243 236", // #fcf3ec
        "--color-surface-300": "250 236 225", // #faece1
        "--color-surface-400": "247 221 203", // #f7ddcb
        "--color-surface-500": "243 207 180", // #f3cfb4
        "--color-surface-600": "219 186 162", // #dbbaa2
        "--color-surface-700": "182 155 135", // #b69b87
        "--color-surface-800": "146 124 108", // #927c6c
        "--color-surface-900": "119 101 88", // #776558

    }
}