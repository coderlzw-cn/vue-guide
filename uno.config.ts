// uno.config.ts
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetMini,
    presetWebFonts,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        presetIcons(),
        presetTypography(),
        presetWebFonts(),
        transformerDirectives(),
        transformerVariantGroup(),
        presetMini()
    ],
    rules: [],
    shortcuts: [
        ["button", 'h-8 bg-slate-100 px-3 cursor-pointer border-1 border-solid border-slate-200 rounded align-middle'],
        ["close-button", 'h-8 bg-[#f86969ff] px-3 cursor-pointer border-1 border-solid border-[#ff0c0cff] rounded align-middle'],
        ["card", 'm-t border-1 rounded-md border-solid border-[#f3f3f3ff] p-4 text-nowrap shadow-md grow space-x-3'],
        ["card-item", 'flex-1 border-1 rounded-md border-solid border-[#f3f3f3ff] p-4 text-nowrap'],
        ["input", ' border-1 rounded-md border-solid border-[#f3f3f3ff] p-2 text-nowrap']
    ]
})
