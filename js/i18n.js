// XC24 Diagnostics — selector de idioma de la página (ES / EN / RU / JA).
// Nada de frameworks: recorre los elementos con data-i18n / data-i18n-html
// y les pisa el texto/HTML según el idioma elegido. Guarda la elección en
// localStorage para que quede recordada en la próxima visita.

const I18N = {
  es: {
    title: `XC24 Diagnostics — Diagnóstico de dispositivos, 100% offline`,
    meta_description: `XC24 Diagnostics: probá y diagnosticá tu mouse, mando, auriculares y rendimiento. Gratis, para Windows, sin conexión a internet.`,
    nav_capturas: `Capturas`,
    nav_descargar: `Descargar`,
    nav_novedades: `Novedades`,
    nav_donaciones: `Donaciones`,
    nav_faq: `Preguntas`,
    nav_agradecimientos: `Agradecimientos`,
    hero_tagline: `Diagnóstico de dispositivos — 100% offline`,
    hero_desc: `Probá tu mouse, tu mando y tus auriculares, medí el rendimiento de tu sistema y detectá fallas antes de que te arruinen una partida. Sin cuentas, sin conexión a internet, sin nada corriendo en segundo plano que no sepas que está ahí.`,
    btn_descargar_gratis: `DESCARGAR GRATIS`,
    badge_sin_registro: `SIN REGISTRO`,
    hero_status: `ESTADO DEL SISTEMA: LISTO`,
    section_capturas_title: `CAPTURAS`,
    capturas_text: `Así se ve XC24 Diagnostics por dentro.`,
    screenshot_inicio: `Inicio`,
    screenshot_inicio_alt: `Pantalla de Inicio de XC24 Diagnostics`,
    screenshot_mouse: `Mouse`,
    screenshot_mouse_alt: `Diagnóstico de Mouse en XC24 Diagnostics`,
    screenshot_gamepad: `Gamepad`,
    screenshot_gamepad_alt: `Diagnóstico de Gamepad en XC24 Diagnostics`,
    screenshot_auriculares: `Auriculares`,
    screenshot_auriculares_alt: `Diagnóstico de Auriculares en XC24 Diagnostics`,
    section_descargar_title: `DESCARGAR`,
    descarga_text_html: `Última versión disponible para Windows. El instalador es un <code>.exe</code> normal: elegís carpeta, accesos directos, y queda instalado con su propio desinstalador.`,
    btn_descargar_full: `DESCARGAR XC24 DIAGNOSTICS`,
    descarga_note_html: `<strong>Nota:</strong> como el instalador no está firmado digitalmente, es normal que Windows SmartScreen muestre una advertencia la primera vez ("Windows protegió tu PC"). Hacé clic en <em>"Más información"</em> → <em>"Ejecutar de todas formas"</em>.`,
    section_novedades_title: `NOVEDADES`,
    novedades_text: `Todo lo que trae esta primera versión de XC24 Diagnostics.`,
    novedades_version_label: `VERSIÓN 1.0.0`,
    novedades_v1_1: `Diagnóstico completo de Mouse, Gamepad y Auriculares, con pruebas dedicadas para cada dispositivo.`,
    novedades_v1_2: `Pantalla de Inicio tipo HUD, con selector circular y navegación por teclado, mouse o mando.`,
    novedades_v1_3: `Compatible con DualShock 4, DualSense, DualShock 3, Xbox y Xbox Series X.`,
    novedades_v1_4: `Informes de diagnóstico en PDF para Mouse y Gamepad, con tus propias notas incluidas.`,
    novedades_v1_5: `Overlay de rendimiento en juego: FPS, uso de CPU y RAM en pantalla, fijalo donde quieras.`,
    novedades_v1_6: `Pruebas de Vibración y Sticks del mando con gráficos en vivo y confirmación manual.`,
    novedades_v1_7: `Disponible en español, inglés, ruso y japonés — la app y los informes.`,
    novedades_v1_8: `100% offline: sin cuentas, sin conexión a internet, sin nada corriendo en segundo plano que no sepas que está ahí.`,
    novedades_v1_9: `Compilación ofuscada, para mayor seguridad del programa.`,
    novedades_note: `Puede que haya algún bug chico dando vueltas — se va a resolver en la próxima versión (1.0.1), junto con nuevos cambios y contenido.`,
    carousel_prev: `Captura anterior`,
    carousel_next: `Siguiente captura`,
    carousel_page_1: `Página 1`,
    carousel_page_2: `Página 2`,
    lightbox_close: `Cerrar`,
    section_donaciones_title: `DONACIONES`,
    donaciones_text: `Espero que les gusten el programa y que les sirvan, si desean bancar el proyecto para que siga creciendo, les agradecería mucho que puedan colaborar con algo, muchas gracias.`,
    donate_group_ar: `Desde Argentina`,
    donate_group_intl: `Desde cualquier país`,
    donate_soon: `(próximamente)`,
    section_agradecimientos_title: `AGRADECIMIENTOS`,
    agradecimientos_text: `XC24 Diagnostics usa recursos de terceros bajo licencia abierta. Gracias a:`,
    credit_music_name: `Anime Cyberpunk — YevhenAstafiev`,
    credit_music_license_html: `Pixabay · <a href="https://pixabay.com/music/synthwave-anime-anime-cyberpunk-534203/" target="_blank" rel="noopener noreferrer">Pixabay Content License</a>`,
    credit_fonts_name: `Tipografías Rajdhani y JetBrains Mono`,
    credit_fonts_license: `Google Fonts · SIL Open Font License`,
    agradecimientos_note_html: `¿Faltó acreditar algo? <a href="#">Avisanos</a>.`,
    section_faq_title: `PREGUNTAS FRECUENTES`,
    faq_q1: `¿Es gratis?`,
    faq_a1: `Sí, XC24 Diagnostics es gratis. Si te sirvió, podés apoyar el proyecto con una donación (ver la sección de arriba).`,
    faq_q2: `¿Necesito internet para usarlo?`,
    faq_a2: `No. Corre 100% offline — ni siquiera hace falta conexión para instalarlo o actualizarlo. Todo el diagnóstico se hace en tu propia máquina.`,
    faq_q3: `¿Por qué Windows me muestra una advertencia al instalarlo?`,
    faq_a3: `Porque el instalador no tiene firma digital (eso requiere un certificado pago). Es normal — hacé clic en "Más información" → "Ejecutar de todas formas".`,
    faq_q4: `¿Qué mandos soporta?`,
    faq_a4: `DualShock 4, DualSense (PS5), DualShock 3 y mandos Xbox, incluido Xbox Series X.`,
    faq_q5: `¿Necesito crear una cuenta?`,
    faq_a5: `No, nunca. No hay registro, ni login, ni nada que identifique quién sos.`,
    faq_q6: `¿Recopila algún dato mío?`,
    faq_a6: `No. No hay telemetría ni conexión a servidores — todo lo que mide se queda en tu PC.`,
    faq_q7: `¿En qué versión de Windows funciona?`,
    faq_a7: `Windows 10 y 11, de 64 bits (x64).`,
    faq_q8: `¿Puedo usar el overlay de Rendimiento (FPS) mientras juego online?`,
    faq_a8: `Con cuidado. El overlay de Rendimiento corre con permisos de administrador y dibuja una ventana superpuesta sobre el juego. Algunos sistemas anti-trampas estrictos (sobre todo los que trabajan a nivel de kernel, como Vanguard de Valorant, o EasyAntiCheat/BattlEye en modo estricto) pueden detectarlo y marcarlo como sospechoso, con riesgo de suspensión de cuenta. No lo recomendamos en juegos competitivos online con anti-cheat activo — en juegos sin anti-cheat o para un jugador no hay ningún problema.`,
    footer_text: `© 2026 XC24 — Derechos reservados`,
  },
  en: {
    title: `XC24 Diagnostics — Device diagnostics, 100% offline`,
    meta_description: `XC24 Diagnostics: test and diagnose your mouse, controller, headset and performance. Free, for Windows, no internet connection needed.`,
    nav_capturas: `Screenshots`,
    nav_descargar: `Download`,
    nav_novedades: `What's New`,
    nav_donaciones: `Donate`,
    nav_faq: `FAQ`,
    nav_agradecimientos: `Credits`,
    hero_tagline: `Device diagnostics — 100% offline`,
    hero_desc: `Test your mouse, your controller and your headset, measure your system's performance, and catch issues before they ruin a match. No accounts, no internet connection, nothing running in the background that you don't know about.`,
    btn_descargar_gratis: `DOWNLOAD FREE`,
    badge_sin_registro: `NO SIGN-UP`,
    hero_status: `SYSTEM STATUS: READY`,
    section_capturas_title: `SCREENSHOTS`,
    capturas_text: `This is what XC24 Diagnostics looks like on the inside.`,
    screenshot_inicio: `Home`,
    screenshot_inicio_alt: `Home screen of XC24 Diagnostics`,
    screenshot_mouse: `Mouse`,
    screenshot_mouse_alt: `Mouse diagnostics in XC24 Diagnostics`,
    screenshot_gamepad: `Gamepad`,
    screenshot_gamepad_alt: `Gamepad diagnostics in XC24 Diagnostics`,
    screenshot_auriculares: `Headset`,
    screenshot_auriculares_alt: `Headset diagnostics in XC24 Diagnostics`,
    section_descargar_title: `DOWNLOAD`,
    descarga_text_html: `Latest version available for Windows. The installer is a regular <code>.exe</code>: pick a folder and shortcuts, and it installs with its own uninstaller.`,
    btn_descargar_full: `DOWNLOAD XC24 DIAGNOSTICS`,
    descarga_note_html: `<strong>Note:</strong> since the installer isn't digitally signed, it's normal for Windows SmartScreen to show a warning the first time ("Windows protected your PC"). Click <em>"More info"</em> → <em>"Run anyway"</em>.`,
    section_novedades_title: `WHAT'S NEW`,
    novedades_text: `Everything this first version of XC24 Diagnostics brings.`,
    novedades_version_label: `VERSION 1.0.0`,
    novedades_v1_1: `Full diagnostics for Mouse, Gamepad, and Headset, with dedicated tests for each device.`,
    novedades_v1_2: `HUD-style Home screen, with a circular selector and navigation by keyboard, mouse, or controller.`,
    novedades_v1_3: `Works with DualShock 4, DualSense, DualShock 3, Xbox, and Xbox Series X.`,
    novedades_v1_4: `PDF diagnostic reports for Mouse and Gamepad, with your own notes included.`,
    novedades_v1_5: `In-game performance overlay: FPS, CPU, and RAM on screen, pin it wherever you want.`,
    novedades_v1_6: `Gamepad Vibration and Stick tests with live graphs and manual confirmation.`,
    novedades_v1_7: `Available in Spanish, English, Russian, and Japanese — the app and the reports.`,
    novedades_v1_8: `100% offline: no accounts, no internet connection, nothing running in the background that you don't know about.`,
    novedades_v1_9: `Obfuscated build, for extra program security.`,
    novedades_note: `There might be a few small bugs floating around — they'll get fixed in the next version (1.0.1), along with new changes and content.`,
    carousel_prev: `Previous screenshot`,
    carousel_next: `Next screenshot`,
    carousel_page_1: `Page 1`,
    carousel_page_2: `Page 2`,
    lightbox_close: `Close`,
    section_donaciones_title: `DONATE`,
    donaciones_text: `XC24 Diagnostics is free and will stay that way. If it was useful to you and you'd like to support the project so it keeps growing, you'll be able to do that here soon.`,
    donate_group_ar: `From Argentina`,
    donate_group_intl: `From anywhere`,
    donate_soon: `(coming soon)`,
    section_agradecimientos_title: `CREDITS`,
    agradecimientos_text: `XC24 Diagnostics uses third-party resources under open licenses. Thanks to:`,
    credit_music_name: `Anime Cyberpunk — YevhenAstafiev`,
    credit_music_license_html: `Pixabay · <a href="https://pixabay.com/music/synthwave-anime-anime-cyberpunk-534203/" target="_blank" rel="noopener noreferrer">Pixabay Content License</a>`,
    credit_fonts_name: `Rajdhani and JetBrains Mono fonts`,
    credit_fonts_license: `Google Fonts · SIL Open Font License`,
    agradecimientos_note_html: `Missing a credit? <a href="#">Let us know</a>.`,
    section_faq_title: `FREQUENTLY ASKED QUESTIONS`,
    faq_q1: `Is it free?`,
    faq_a1: `Yes, XC24 Diagnostics is free and will stay that way. If it was useful to you, you can support the project with a donation (see the section above).`,
    faq_q2: `Do I need internet to use it?`,
    faq_a2: `No. It runs 100% offline — it doesn't even need a connection to install or update. All the diagnostics happen on your own machine.`,
    faq_q3: `Why does Windows show a warning when I install it?`,
    faq_a3: `Because the installer isn't digitally signed (that requires a paid certificate). It's normal — click "More info" → "Run anyway".`,
    faq_q4: `Which controllers are supported?`,
    faq_a4: `DualShock 4, DualSense (PS5), DualShock 3, and Xbox controllers (including Xbox Series X).`,
    faq_q5: `Do I need to create an account?`,
    faq_a5: `No, never. There's no sign-up, no login, nothing that identifies who you are.`,
    faq_q6: `Does it collect any of my data?`,
    faq_a6: `No. There's no telemetry and no connection to any server — everything it measures stays on your PC.`,
    faq_q7: `What Windows versions does it support?`,
    faq_a7: `Windows 10 and 11, 64-bit (x64).`,
    faq_q8: `Can I use the Performance (FPS) overlay while playing online?`,
    faq_a8: `With caution. The Performance overlay runs with administrator permissions and draws a window on top of the game. Some strict anti-cheat systems (especially kernel-level ones, like Valorant's Vanguard, or EasyAntiCheat/BattlEye in strict mode) may detect it and flag it as suspicious, risking an account suspension. We don't recommend using it in competitive online games with active anti-cheat — it's completely fine in games without anti-cheat or in single-player.`,
    footer_text: `© 2026 XC24 — All rights reserved`,
  },
  ru: {
    title: `XC24 Diagnostics — диагностика устройств, полностью offline`,
    meta_description: `XC24 Diagnostics: проверка и диагностика мыши, геймпада, наушников и производительности. Бесплатно, для Windows, без подключения к интернету.`,
    nav_capturas: `Скриншоты`,
    nav_descargar: `Скачать`,
    nav_novedades: `Новости`,
    nav_donaciones: `Донаты`,
    nav_faq: `Вопросы`,
    nav_agradecimientos: `Благодарности`,
    hero_tagline: `Диагностика устройств — полностью offline`,
    hero_desc: `Проверь свою мышь, геймпад и наушники, измерь производительность системы и найди неполадки до того, как они испортят тебе матч. Без аккаунтов, без подключения к интернету, без ничего непонятного в фоновом режиме.`,
    btn_descargar_gratis: `СКАЧАТЬ БЕСПЛАТНО`,
    badge_sin_registro: `БЕЗ РЕГИСТРАЦИИ`,
    hero_status: `СОСТОЯНИЕ СИСТЕМЫ: ГОТОВО`,
    section_capturas_title: `СКРИНШОТЫ`,
    capturas_text: `Вот как выглядит XC24 Diagnostics изнутри.`,
    screenshot_inicio: `Главная`,
    screenshot_inicio_alt: `Главный экран XC24 Diagnostics`,
    screenshot_mouse: `Мышь`,
    screenshot_mouse_alt: `Диагностика мыши в XC24 Diagnostics`,
    screenshot_gamepad: `Геймпад`,
    screenshot_gamepad_alt: `Диагностика геймпада в XC24 Diagnostics`,
    screenshot_auriculares: `Наушники`,
    screenshot_auriculares_alt: `Диагностика наушников в XC24 Diagnostics`,
    section_descargar_title: `СКАЧАТЬ`,
    descarga_text_html: `Последняя версия для Windows. Установщик — обычный <code>.exe</code>: выбираешь папку и ярлыки, программа устанавливается со своим деинсталлятором.`,
    btn_descargar_full: `СКАЧАТЬ XC24 DIAGNOSTICS`,
    descarga_note_html: `<strong>Примечание:</strong> поскольку установщик не имеет цифровой подписи, это нормально, что Windows SmartScreen покажет предупреждение при первом запуске («Windows защитила ваш компьютер»). Нажмите <em>«Подробнее»</em> → <em>«Выполнить в любом случае»</em>.`,
    section_novedades_title: `НОВОСТИ`,
    novedades_text: `Всё, что есть в этой первой версии XC24 Diagnostics.`,
    novedades_version_label: `ВЕРСИЯ 1.0.0`,
    novedades_v1_1: `Полная диагностика мыши, геймпада и наушников — с отдельными тестами для каждого устройства.`,
    novedades_v1_2: `Главный экран в стиле HUD, с круговым селектором и навигацией с клавиатуры, мыши или геймпада.`,
    novedades_v1_3: `Поддержка DualShock 4, DualSense, DualShock 3, Xbox и Xbox Series X.`,
    novedades_v1_4: `PDF-отчёты диагностики для мыши и геймпада с твоими собственными заметками.`,
    novedades_v1_5: `Оверлей производительности в игре: FPS, CPU и RAM на экране — закрепляй, где удобно.`,
    novedades_v1_6: `Тесты вибрации и стиков геймпада с графиками в реальном времени и ручным подтверждением.`,
    novedades_v1_7: `Доступно на испанском, английском, русском и японском — приложение и отчёты.`,
    novedades_v1_8: `Полностью offline: без аккаунтов, без подключения к интернету, без ничего непонятного в фоновом режиме.`,
    novedades_v1_9: `Обфусцированная сборка — для дополнительной безопасности программы.`,
    novedades_note: `Возможны небольшие баги — они будут исправлены в следующей версии (1.0.1), вместе с новыми изменениями и контентом.`,
    carousel_prev: `Предыдущий скриншот`,
    carousel_next: `Следующий скриншот`,
    carousel_page_1: `Страница 1`,
    carousel_page_2: `Страница 2`,
    lightbox_close: `Закрыть`,
    section_donaciones_title: `ДОНАТЫ`,
    donaciones_text: `XC24 Diagnostics бесплатна и останется такой. Если программа была полезна и ты хочешь поддержать проект, чтобы он развивался дальше, скоро это можно будет сделать здесь.`,
    donate_group_ar: `Из Аргентины`,
    donate_group_intl: `Из любой страны`,
    donate_soon: `(скоро)`,
    section_agradecimientos_title: `БЛАГОДАРНОСТИ`,
    agradecimientos_text: `XC24 Diagnostics использует сторонние ресурсы с открытой лицензией. Спасибо:`,
    credit_music_name: `Anime Cyberpunk — YevhenAstafiev`,
    credit_music_license_html: `Pixabay · <a href="https://pixabay.com/music/synthwave-anime-anime-cyberpunk-534203/" target="_blank" rel="noopener noreferrer">Pixabay Content License</a>`,
    credit_fonts_name: `Шрифты Rajdhani и JetBrains Mono`,
    credit_fonts_license: `Google Fonts · SIL Open Font License`,
    agradecimientos_note_html: `Забыли кого-то указать? <a href="#">Сообщите нам</a>.`,
    section_faq_title: `ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ`,
    faq_q1: `Программа бесплатная?`,
    faq_a1: `Да, XC24 Diagnostics бесплатна и останется такой. Если программа была полезна, можешь поддержать проект донатом (см. раздел выше).`,
    faq_q2: `Нужен ли интернет для работы?`,
    faq_a2: `Нет. Программа работает полностью offline — даже для установки или обновления подключение не требуется. Вся диагностика выполняется прямо на твоём компьютере.`,
    faq_q3: `Почему Windows показывает предупреждение при установке?`,
    faq_a3: `Потому что установщик не имеет цифровой подписи (это требует платного сертификата). Это нормально — нажми «Подробнее» → «Выполнить в любом случае».`,
    faq_q4: `Какие геймпады поддерживаются?`,
    faq_a4: `DualShock 4, DualSense (PS5), DualShock 3 и геймпады Xbox (включая Xbox Series X).`,
    faq_q5: `Нужно ли создавать аккаунт?`,
    faq_a5: `Нет, никогда. Нет регистрации, входа и ничего, что могло бы тебя идентифицировать.`,
    faq_q6: `Собирает ли программа какие-то данные?`,
    faq_a6: `Нет. Никакой телеметрии и подключения к серверам — всё, что измеряется, остаётся на твоём компьютере.`,
    faq_q7: `На каких версиях Windows работает?`,
    faq_a7: `Windows 10 и 11, 64-бит (x64).`,
    faq_q8: `Можно ли использовать оверлей производительности (FPS) во время онлайн-игры?`,
    faq_a8: `С осторожностью. Оверлей производительности запускается с правами администратора и рисует окно поверх игры. Некоторые строгие античит-системы (особенно работающие на уровне ядра, например Vanguard от Valorant, или EasyAntiCheat/BattlEye в строгом режиме) могут обнаружить его и пометить как подозрительный, что рискует привести к блокировке аккаунта. Мы не рекомендуем использовать его в соревновательных онлайн-играх с активным античитом — в играх без античита или в одиночной игре проблем нет.`,
    footer_text: `© 2026 XC24 — Все права защищены`,
  },
  ja: {
    title: `XC24 Diagnostics — デバイス診断、完全オフライン`,
    meta_description: `XC24 Diagnostics: マウス、コントローラー、ヘッドセット、パフォーマンスをテスト・診断。Windows用、無料、インターネット接続不要。`,
    nav_capturas: `スクリーンショット`,
    nav_descargar: `ダウンロード`,
    nav_novedades: `更新情報`,
    nav_donaciones: `寄付`,
    nav_faq: `FAQ`,
    nav_agradecimientos: `謝辞`,
    hero_tagline: `デバイス診断 — 完全オフライン`,
    hero_desc: `マウス、コントローラー、ヘッドセットをテストし、システムのパフォーマンスを測定して、対戦を台無しにする前に不具合を見つけよう。アカウント不要、インターネット接続不要、知らないうちにバックグラウンドで動くものもなし。`,
    btn_descargar_gratis: `無料でダウンロード`,
    badge_sin_registro: `登録不要`,
    hero_status: `システム状態: 準備完了`,
    section_capturas_title: `スクリーンショット`,
    capturas_text: `XC24 Diagnostics の内部はこんな感じです。`,
    screenshot_inicio: `ホーム`,
    screenshot_inicio_alt: `XC24 Diagnostics のホーム画面`,
    screenshot_mouse: `マウス`,
    screenshot_mouse_alt: `XC24 Diagnostics のマウス診断`,
    screenshot_gamepad: `ゲームパッド`,
    screenshot_gamepad_alt: `XC24 Diagnostics のゲームパッド診断`,
    screenshot_auriculares: `ヘッドセット`,
    screenshot_auriculares_alt: `XC24 Diagnostics のヘッドセット診断`,
    section_descargar_title: `ダウンロード`,
    descarga_text_html: `Windows向けの最新バージョンです。インストーラーは通常の<code>.exe</code>ファイルで、フォルダとショートカットを選ぶだけ。専用のアンインストーラー付きでインストールされます。`,
    btn_descargar_full: `XC24 DIAGNOSTICSをダウンロード`,
    descarga_note_html: `<strong>注意:</strong> インストーラーはデジタル署名されていないため、初回実行時にWindows SmartScreenが警告を表示するのは正常です(「WindowsによってPCが保護されました」)。<em>「詳細情報」</em> → <em>「実行」</em>の順にクリックしてください。`,
    section_novedades_title: `更新情報`,
    novedades_text: `XC24 Diagnostics の最初のバージョンに搭載されている内容です。`,
    novedades_version_label: `バージョン 1.0.0`,
    novedades_v1_1: `マウス、ゲームパッド、ヘッドセットの本格的な診断 — それぞれの専用テストに対応。`,
    novedades_v1_2: `HUD風のホーム画面、円形セレクターとキーボード/マウス/コントローラーでの操作に対応。`,
    novedades_v1_3: `DualShock 4、DualSense、DualShock 3、Xbox、Xbox Series Xに対応。`,
    novedades_v1_4: `マウスとゲームパッドのPDF診断レポート、自分のメモも記録可能。`,
    novedades_v1_5: `ゲーム内パフォーマンスオーバーレイ: FPS、CPU・RAM使用率を画面に表示、好きな位置に固定可能。`,
    novedades_v1_6: `ゲームパッドの振動・スティックテスト、リアルタイムグラフと手動確認付き。`,
    novedades_v1_7: `スペイン語・英語・ロシア語・日本語に対応 — アプリ本体とレポート両方。`,
    novedades_v1_8: `完全オフライン: アカウント不要、インターネット接続不要、知らないうちにバックグラウンドで動くものもなし。`,
    novedades_v1_9: `難読化ビルドで、プログラムのセキュリティを強化。`,
    novedades_note: `細かい不具合が残っている可能性があります — 次のバージョン(1.0.1)で、新しい変更や追加コンテンツと一緒に修正予定です。`,
    carousel_prev: `前のスクリーンショット`,
    carousel_next: `次のスクリーンショット`,
    carousel_page_1: `ページ 1`,
    carousel_page_2: `ページ 2`,
    lightbox_close: `閉じる`,
    section_donaciones_title: `寄付`,
    donaciones_text: `XC24 Diagnosticsは無料で、これからも無料であり続けます。役に立った、プロジェクトの成長を応援したいという方は、近日ここから支援できるようになります。`,
    donate_group_ar: `アルゼンチン国内から`,
    donate_group_intl: `世界中から`,
    donate_soon: `(近日公開)`,
    section_agradecimientos_title: `謝辞`,
    agradecimientos_text: `XC24 Diagnosticsはオープンライセンスのサードパーティ素材を使用しています。以下に感謝します:`,
    credit_music_name: `Anime Cyberpunk — YevhenAstafiev`,
    credit_music_license_html: `Pixabay · <a href="https://pixabay.com/music/synthwave-anime-anime-cyberpunk-534203/" target="_blank" rel="noopener noreferrer">Pixabay Content License</a>`,
    credit_fonts_name: `フォント Rajdhani と JetBrains Mono`,
    credit_fonts_license: `Google Fonts · SIL Open Font License`,
    agradecimientos_note_html: `クレジット漏れがあれば<a href="#">こちら</a>までご連絡ください。`,
    section_faq_title: `よくある質問`,
    faq_q1: `無料ですか?`,
    faq_a1: `はい、XC24 Diagnosticsは無料で、これからも無料であり続けます。役に立った場合は、上の寄付セクションからプロジェクトを支援できます。`,
    faq_q2: `利用にインターネットは必要ですか?`,
    faq_a2: `いいえ。完全オフラインで動作します — インストールやアップデートにも接続は不要です。診断はすべてお使いのPC内で行われます。`,
    faq_q3: `インストール時にWindowsが警告を表示するのはなぜですか?`,
    faq_a3: `インストーラーがデジタル署名されていないためです(署名には有料の証明書が必要です)。正常な動作です — 「詳細情報」→「実行」の順にクリックしてください。`,
    faq_q4: `対応しているコントローラーは?`,
    faq_a4: `DualShock 4、DualSense(PS5)、DualShock 3、Xboxコントローラー(Xbox Series Xを含む)に対応しています。`,
    faq_q5: `アカウント登録は必要ですか?`,
    faq_a5: `いいえ、一切不要です。登録もログインも、あなたを特定するものは何もありません。`,
    faq_q6: `何かデータを収集しますか?`,
    faq_a6: `いいえ。テレメトリーもサーバーへの接続もありません — 測定したものはすべてお使いのPC内に留まります。`,
    faq_q7: `どのWindowsバージョンに対応していますか?`,
    faq_a7: `Windows 10および11、64ビット(x64)に対応しています。`,
    faq_q8: `オンラインプレイ中にパフォーマンス(FPS)オーバーレイを使用できますか?`,
    faq_a8: `注意が必要です。パフォーマンスオーバーレイは管理者権限で実行され、ゲームの上にウィンドウを描画します。一部の厳格なアンチチートシステム(特にValorantのVanguardやEasyAntiCheat/BattlEyeの厳格モードなど、カーネルレベルで動作するもの)はこれを検出し、不審なものとしてフラグを立てる可能性があり、アカウント停止のリスクがあります。アンチチートが有効なオンライン対戦ゲームでの使用はおすすめしません — アンチチートのないゲームやシングルプレイヤーでは問題ありません。`,
    footer_text: `© 2026 XC24 — All Rights Reserved`,
  },
};

const SUPPORTED_LANGS = Object.keys(I18N);
const STORAGE_KEY = 'xc24-lang';

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;

  document.documentElement.lang = lang;

  const titleEl = document.getElementById('page-title');
  if (titleEl && dict.title) titleEl.textContent = dict.title;

  const metaEl = document.getElementById('meta-description');
  if (metaEl && dict.meta_description) metaEl.setAttribute('content', dict.meta_description);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    // localStorage puede no estar disponible (modo privado, etc.) — no pasa nada.
  }
}

function initLang() {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    // sin acceso a localStorage, seguimos con el default.
  }
  const initial = SUPPORTED_LANGS.includes(saved) ? saved : 'es';
  applyLang(initial);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
