// This file is generated by `vscode-ext-gen`. Do not modify manually.
// @see https://github.com/antfu/vscode-ext-gen

// Meta info
export const publisher = "kvoon3"
export const name = "iconify-fork"
export const version = "0.8.1"
export const displayName = "Iconify IntelliSense Fork"
export const description = "Intelligent Iconify previewing and searching for VS Code"
export const extensionId = `${publisher}.${name}`

/**
 * Type union of all commands
 */
export type CommandKey = 
  | "iconify.toggle-annotations"
  | "iconify.toggle-inplace"
  | "iconify.clear-cache"

/**
 * Commands map registed by `kvoon3.iconify-fork`
 */
export const commands = {
  /**
   * Toggle Annotations
   * @value `iconify.toggle-annotations`
   */
  toggleAnnotations: "iconify.toggle-annotations",
  /**
   * Toggle In-place Mode
   * @value `iconify.toggle-inplace`
   */
  toggleInplace: "iconify.toggle-inplace",
  /**
   * Clear icon cache
   * @value `iconify.clear-cache`
   */
  clearCache: "iconify.clear-cache",
} satisfies Record<string, CommandKey>

/**
 * Type union of all configs
 */
export type ConfigKey = 
  | "iconify.inplace"
  | "iconify.annotations"
  | "iconify.position"
  | "iconify.color"
  | "iconify.delimiters"
  | "iconify.prefixes"
  | "iconify.suffixes"
  | "iconify.languageIds"
  | "iconify.includes"
  | "iconify.excludes"
  | "iconify.cdnEntry"
  | "iconify.customCollectionJsonPaths"
  | "iconify.customCollectionIdsMap"
  | "iconify.customAliasesJsonPaths"
  | "iconify.customAliasesOnly"

export interface ConfigKeyTypeMap {
  "iconify.inplace": boolean,
  "iconify.annotations": boolean,
  "iconify.position": ("before" | "after"),
  "iconify.color": string,
  "iconify.delimiters": string[],
  "iconify.prefixes": string[],
  "iconify.suffixes": string[],
  "iconify.languageIds": string[],
  "iconify.includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  "iconify.excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  "iconify.cdnEntry": string,
  "iconify.customCollectionJsonPaths": string[],
  "iconify.customCollectionIdsMap": Record<string, unknown>,
  "iconify.customAliasesJsonPaths": string[],
  "iconify.customAliasesOnly": boolean,
}

export interface ConfigShorthandMap {
  inplace: "iconify.inplace",
  annotations: "iconify.annotations",
  position: "iconify.position",
  color: "iconify.color",
  delimiters: "iconify.delimiters",
  prefixes: "iconify.prefixes",
  suffixes: "iconify.suffixes",
  languageIds: "iconify.languageIds",
  includes: "iconify.includes",
  excludes: "iconify.excludes",
  cdnEntry: "iconify.cdnEntry",
  customCollectionJsonPaths: "iconify.customCollectionJsonPaths",
  customCollectionIdsMap: "iconify.customCollectionIdsMap",
  customAliasesJsonPaths: "iconify.customAliasesJsonPaths",
  customAliasesOnly: "iconify.customAliasesOnly",
}

export interface ConfigItem<T extends keyof ConfigKeyTypeMap> {
  key: T,
  default: ConfigKeyTypeMap[T],
}


/**
 * Configs map registered by `kvoon3.iconify-fork`
 */
export const configs = {
  /**
   * Use icon graph to replace the icon name.
   * @key `iconify.inplace`
   * @default `true`
   * @type `boolean`
   */
  inplace: {
    key: "iconify.inplace",
    default: true,
  } as ConfigItem<"iconify.inplace">,
  /**
   * Enabled Iconify inline annotations
   * @key `iconify.annotations`
   * @default `true`
   * @type `boolean`
   */
  annotations: {
    key: "iconify.annotations",
    default: true,
  } as ConfigItem<"iconify.annotations">,
  /**
   * Position the icon before or after the icon name
   * @key `iconify.position`
   * @default `"before"`
   * @type `string`
   */
  position: {
    key: "iconify.position",
    default: "before",
  } as ConfigItem<"iconify.position">,
  /**
   * Icon color hex for inline displaying
   * @key `iconify.color`
   * @default `"auto"`
   * @type `string`
   */
  color: {
    key: "iconify.color",
    default: "auto",
  } as ConfigItem<"iconify.color">,
  /**
   * Delimiters for separating between collection id and icon id
   * @key `iconify.delimiters`
   * @default `[":","--","-","/"]`
   * @type `array`
   */
  delimiters: {
    key: "iconify.delimiters",
    default: [":","--","-","/"],
  } as ConfigItem<"iconify.delimiters">,
  /**
   * Prefixes for matching
   * @key `iconify.prefixes`
   * @default `["","i-","~icons/"]`
   * @type `array`
   */
  prefixes: {
    key: "iconify.prefixes",
    default: ["","i-","~icons/"],
  } as ConfigItem<"iconify.prefixes">,
  /**
   * Suffixes for matching
   * @key `iconify.suffixes`
   * @default `["","i-"]`
   * @type `array`
   */
  suffixes: {
    key: "iconify.suffixes",
    default: ["","i-"],
  } as ConfigItem<"iconify.suffixes">,
  /**
   * Array of language IDs to enable annotations
   * @key `iconify.languageIds`
   * @default `["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"]`
   * @type `array`
   */
  languageIds: {
    key: "iconify.languageIds",
    default: ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],
  } as ConfigItem<"iconify.languageIds">,
  /**
   * Collection IDs to be included for detection
   * @key `iconify.includes`
   * @default `null`
   * @type `array`
   */
  includes: {
    key: "iconify.includes",
    default: null,
  } as ConfigItem<"iconify.includes">,
  /**
   * Collection IDs to be excluded for detection
   * @key `iconify.excludes`
   * @default `null`
   * @type `array`
   */
  excludes: {
    key: "iconify.excludes",
    default: null,
  } as ConfigItem<"iconify.excludes">,
  /**
   * CDN entry of iconify icon-sets
   * @key `iconify.cdnEntry`
   * @default `"https://icones.js.org/collections"`
   * @type `string`
   */
  cdnEntry: {
    key: "iconify.cdnEntry",
    default: "https://icones.js.org/collections",
  } as ConfigItem<"iconify.cdnEntry">,
  /**
   * JSON paths for custom collection
   * @key `iconify.customCollectionJsonPaths`
   * @default `[]`
   * @type `array`
   */
  customCollectionJsonPaths: {
    key: "iconify.customCollectionJsonPaths",
    default: [],
  } as ConfigItem<"iconify.customCollectionJsonPaths">,
  /**
   * Collection IDs Map for collection name alias, e.g. { 'mc': 'mingcute' }
   * @key `iconify.customCollectionIdsMap`
   * @default `{}`
   * @type `object`
   */
  customCollectionIdsMap: {
    key: "iconify.customCollectionIdsMap",
    default: {},
  } as ConfigItem<"iconify.customCollectionIdsMap">,
  /**
   * JSON paths for custom aliases
   * @key `iconify.customAliasesJsonPaths`
   * @default `[]`
   * @type `array`
   */
  customAliasesJsonPaths: {
    key: "iconify.customAliasesJsonPaths",
    default: [],
  } as ConfigItem<"iconify.customAliasesJsonPaths">,
  /**
   * Only use the icon aliases. Non aliased icons will be ignored.
   * @key `iconify.customAliasesOnly`
   * @default `false`
   * @type `boolean`
   */
  customAliasesOnly: {
    key: "iconify.customAliasesOnly",
    default: false,
  } as ConfigItem<"iconify.customAliasesOnly">,
}

export interface ScopedConfigKeyTypeMap {
  "inplace": boolean,
  "annotations": boolean,
  "position": ("before" | "after"),
  "color": string,
  "delimiters": string[],
  "prefixes": string[],
  "suffixes": string[],
  "languageIds": string[],
  "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  "cdnEntry": string,
  "customCollectionJsonPaths": string[],
  "customCollectionIdsMap": Record<string, unknown>,
  "customAliasesJsonPaths": string[],
  "customAliasesOnly": boolean,
}

export const scopedConfigs = {
  scope: "iconify",
  defaults: {
    "inplace": true,
    "annotations": true,
    "position": "before",
    "color": "auto",
    "delimiters": [":","--","-","/"],
    "prefixes": ["","i-","~icons/"],
    "suffixes": ["","i-"],
    "languageIds": ["javascript","javascriptreact","typescript","typescriptreact","vue","svelte","html","pug","json","yaml"],
    "includes": null,
    "excludes": null,
    "cdnEntry": "https://icones.js.org/collections",
    "customCollectionJsonPaths": [],
    "customCollectionIdsMap": {},
    "customAliasesJsonPaths": [],
    "customAliasesOnly": false,
  } satisfies ScopedConfigKeyTypeMap,
}

export interface NestedConfigs {
  "iconify": {
    "inplace": boolean,
    "annotations": boolean,
    "position": ("before" | "after"),
    "color": string,
    "delimiters": string[],
    "prefixes": string[],
    "suffixes": string[],
    "languageIds": string[],
    "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
    "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
    "cdnEntry": string,
    "customCollectionJsonPaths": string[],
    "customCollectionIdsMap": Record<string, unknown>,
    "customAliasesJsonPaths": string[],
    "customAliasesOnly": boolean,
  },
}

export interface NestedScopedConfigs {
  "inplace": boolean,
  "annotations": boolean,
  "position": ("before" | "after"),
  "color": string,
  "delimiters": string[],
  "prefixes": string[],
  "suffixes": string[],
  "languageIds": string[],
  "includes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  "excludes": (("academicons" | "akar-icons" | "ant-design" | "arcticons" | "basil" | "bi" | "bitcoin-icons" | "bpmn" | "brandico" | "bx" | "bxl" | "bxs" | "bytesize" | "carbon" | "cbi" | "charm" | "ci" | "cib" | "cif" | "cil" | "circle-flags" | "circum" | "clarity" | "codicon" | "covid" | "cryptocurrency" | "cryptocurrency-color" | "dashicons" | "devicon" | "devicon-plain" | "ei" | "el" | "emojione" | "emojione-monotone" | "emojione-v1" | "entypo" | "entypo-social" | "eos-icons" | "ep" | "et" | "eva" | "f7" | "fa" | "fa-brands" | "fa-regular" | "fa-solid" | "fa6-brands" | "fa6-regular" | "fa6-solid" | "fad" | "fe" | "feather" | "file-icons" | "flag" | "flagpack" | "flat-color-icons" | "flat-ui" | "flowbite" | "fluent" | "fluent-emoji" | "fluent-emoji-flat" | "fluent-emoji-high-contrast" | "fluent-mdl2" | "fontelico" | "fontisto" | "formkit" | "foundation" | "fxemoji" | "gala" | "game-icons" | "geo" | "gg" | "gis" | "gravity-ui" | "gridicons" | "grommet-icons" | "guidance" | "healthicons" | "heroicons" | "heroicons-outline" | "heroicons-solid" | "humbleicons" | "ic" | "icomoon-free" | "icon-park" | "icon-park-outline" | "icon-park-solid" | "icon-park-twotone" | "iconamoon" | "iconoir" | "icons8" | "il" | "ion" | "iwwa" | "jam" | "la" | "lets-icons" | "line-md" | "logos" | "ls" | "lucide" | "mage" | "majesticons" | "maki" | "map" | "marketeq" | "material-symbols" | "material-symbols-light" | "mdi" | "mdi-light" | "medical-icon" | "memory" | "meteocons" | "mi" | "mingcute" | "mono-icons" | "mynaui" | "nimbus" | "nonicons" | "noto" | "noto-v1" | "octicon" | "oi" | "ooui" | "openmoji" | "oui" | "pajamas" | "pepicons" | "pepicons-pencil" | "pepicons-pop" | "pepicons-print" | "ph" | "pixelarticons" | "prime" | "ps" | "quill" | "radix-icons" | "raphael" | "ri" | "si-glyph" | "simple-icons" | "simple-line-icons" | "skill-icons" | "solar" | "streamline" | "streamline-emojis" | "subway" | "svg-spinners" | "system-uicons" | "tabler" | "tdesign" | "teenyicons" | "token" | "token-branded" | "topcoat" | "twemoji" | "typcn" | "uil" | "uim" | "uis" | "uit" | "uiw" | "unjs" | "vaadin" | "vs" | "vscode-icons" | "websymbol" | "whh" | "wi" | "wpf" | "zmdi" | "zondicons")[] | null),
  "cdnEntry": string,
  "customCollectionJsonPaths": string[],
  "customCollectionIdsMap": Record<string, unknown>,
  "customAliasesJsonPaths": string[],
  "customAliasesOnly": boolean,
}

