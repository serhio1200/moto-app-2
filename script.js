// МотоДиагностика PRO - Основная логика приложения

const app = {
    modules: {},
    config: {
        modelsDatabase: {
            "Honda": [
                "CB125F", "CB300R", "CB500X", "CB650R", "CBR500R", "CBR650R", "CBR1000RR-R Fireblade", 
                "CRF300L", "CRF450R", "Africa Twin", "Gold Wing", "Rebel 500", "Rebel 1100", "PCX160", 
                "ADV160", "Forza 350", "CT125", "Monkey 125", "Super Cub C125", "NM4 Vultus", "VFR800F"
            ],
            "Yamaha": [
                "MT-07", "MT-09", "MT-10", "MT-15", "MT-125", "YZF-R1", "YZF-R6", "YZF-R7", "YZF-R3", 
                "YZF-R125", "XMAX", "TMAX", "Tracer 9", "Tracer 7", "XSR900", "XSR700", "XSR155", 
                "Tenere 700", "WR155R", "NMAX", "YZ450F", "YZ250F"
            ],
            "Kawasaki": [
                "Ninja ZX-10R", "Ninja ZX-6R", "Ninja 650", "Ninja 400", "Ninja 300", "Ninja 250", 
                "Ninja 125", "Z900", "Z800", "Z650", "Z400", "Z300", "Z250", "Z125", "Versys 650", 
                "Versys 300", "Vulcan S", "Vulcan 900", "W800", "KLX230", "KLX140", "KX450", "KX250"
            ],
            "Suzuki": [
                "GSX-R1000", "GSX-R750", "GSX-R600", "GSX-R125", "GSX-S1000", "GSX-S750", "GSX-S125", 
                "SV650", "V-Strom 650", "V-Strom 1050", "V-Strom 250", "Hayabusa", "Burgman 400", 
                "Burgman 200", "RM-Z450", "RM-Z250"
            ],
            "BMW": [
                "S1000RR", "S1000XR", "S1000R", "R1250GS", "R1250RT", "R1250R", "R1250RS", "F900R", 
                "F900XR", "F750GS", "F850GS", "G310R", "G310GS", "C400X", "C400GT", "K1600GT", "K1600B"
            ],
            "KTM": [
                "1290 Super Duke R", "1290 Super Adventure", "790 Duke", "790 Adventure", "390 Duke", 
                "390 Adventure", "250 Duke", "125 Duke", "690 Enduro", "690 SMC", "450 EXC", "350 EXC", 
                "250 EXC", "Freeride E-XC"
            ],
            "Ducati": [
                "Panigale V4", "Panigale V2", "Streetfighter V4", "Monster", "Scrambler", "Multistrada", 
                "Hypermotard", "Diavel", "XDiavel", "SuperSport", "DesertX"
            ],
            "Triumph": [
                "Street Triple", "Speed Triple", "Tiger 900", "Tiger 1200", "Bonneville", "Scrambler", 
                "Rocket 3", "Trident", "Daytona", "Thruxton", "Speed Twin"
            ],
            "Harley-Davidson": [
                "Street Glide", "Road Glide", "Sportster", "Fat Boy", "Softail", "Pan America", 
                "Low Rider", "Heritage Classic", "Breakout", "CVO", "LiveWire"
            ],
            "Другая марка": ["Другая модель"]
        },
        motorcycleClasses: {
            "Спортивные (Sport)": {
                description: "Для скорости и резкой езды по асфальту, агрессивная посадка.",
                examples: ["Yamaha YZF-R1", "Honda CBR1000RR", "Kawasaki Ninja ZX-10R"]
            },
            "Голые (Naked)": {
                description: "Мотоциклы без обтекателей, с прямой посадкой, для города и активной езды.",
                examples: ["Yamaha MT-07", "Kawasaki Z900", "Triumph Street Triple"]
            },
            "Круизеры / Чопперы": {
                description: "Низкая посадка, для неспешной езды по трассе, акцент на стиле.",
                examples: ["Harley-Davidson Softail", "Indian Chief", "Yamaha V-Star"]
            },
            "Туристические (Touring)": {
                description: "Максимальный комфорт для дальних поездок, с багажом и защитой.",
                examples: ["Honda Gold Wing", "BMW K 1600 GTL", "Harley-Davidson Road Glide"]
            },
            "Спорт-туризм (Sport-Touring)": {
                description: "Гибрид спортивного и туристического, для быстрых и дальних поездок.",
                examples: ["Yamaha Tracer 9", "Kawasaki Ninja 1000SX", "BMW S1000XR"]
            },
            "Классика / Ретро (Classic)": {
                description: "Внешний вид в стиле мотоциклов прошлых лет.",
                examples: ["Royal Enfield Classic 350", "Triumph Bonneville", "Moto Guzzi V7"]
            },
            "Кафе-рейсеры (Cafe Racer)": {
                description: "Ретро-стиль с спортивными элементами, низким рулем.",
                examples: ["Triumph Thruxton", "Ducati Scrambler Cafe Racer", "Norton Commando"]
            },
            "Мотокросс (Motocross)": {
                description: "Для гонок по грунтовым трассам, без фар и поворотников.",
                examples: ["KTM 450 SX-F", "Honda CRF450R", "Yamaha YZ450F"]
            },
            "Эндуро (Enduro)": {
                description: "Для езды по бездорожью, но с светотехникой для использования на дорогах.",
                examples: ["KTM 500 EXC", "Husqvarna FE 501", "Beta 500 RR-S"]
            },
            "Трэйл (Trail)": {
                description: "Легкие внедорожники для неагрессивного покорения природы.",
                examples: ["Honda CRF250L", "Yamaha XT250", "Kawasaki KLX230"]
            },
            "Эдвенчер (Adventure)": {
                description: "Универсальные мотоциклы для асфальта и бездорожья, часто с большим запасом хода.",
                examples: ["BMW R1250GS", "KTM 1290 Super Adventure", "Ducati Multistrada"]
            },
            "Супермото (Supermoto)": {
                description: "Внедорожный мотоцикл с дорожной резиной, для агрессивной езды по городу и картодрому.",
                examples: ["KTM 690 SMC R", "Husqvarna 701 Supermoto", "Aprilia SXV 550"]
            },
            "Скутеры (Scooter)": {
                description: "Автоматическая коробка передач, удобство для города.",
                examples: ["Yamaha XMAX", "Honda PCX", "Vespa GTS"]
            },
            "Мопеды / Легкие мотоциклы": {
                description: "Маленький объем двигателя, для неспешных поездок по городу.",
                examples: ["Honda Super Cub", "Yamaha YBR125", "KTM 125 Duke"]
            },
            "Электрические мотоциклы": {
                description: "Тихие и экологичные, с мгновенной тягой.",
                examples: ["Zero SR/F", "Energica Ego", "Harley-Davidson LiveWire"]
            }
        },
        gearboxTypes: {
            "Механическая": "Водитель вручную с помощью рычага сцепления (на руле) и педали переключения передач (ножной рычаг). Подавляющее большинство мотоциклов.",
            "Автоматическая (DCT / Вариатор)": "Водитель не управляет сцеплением (нет рычага сцепление). Переключение автоматическое или ручное по желанию. Honda DCT, скутеры с вариатором.",
            "Полуавтоматическая": "У мотоцикла нет рычага сцепления на руле, но при этом есть педаль или кнопка, как на механической коробке. Старые мопеды, скутеры с педалями."
        },
        originCountries: {
            "Дилерский ПТС РФ": {
                description: "Мотоцикл был новым официально ввезен в Россию дилером (импортером) и продан первому владельцу. Первым и единственным документом на мотоцикл является российский ПТС (Паспорт Транспортного Средства), выданный таможенными органами РФ.",
                examples: ["Полная история обслуживания у официального дилера", "Российская гарантия", "Первый владелец в ПТС"]
            },
            "Япония": {
                description: "Мотоциклы для внутреннего японского рынка. Часто имеют ограничение максимальной скорости (~180 км/ч), спидометр только в км/ч, специфичную маркировку (надписи на японском). Могут быть 'экономичные' версии двигателей. Часто оснащены катафотами на вилках.",
                examples: ["Спидометр только в км/ч", "Японские надписи на панели", "Катафоты на вилках", "Экономичные версии двигателей"]
            },
            "Европа": {
                description: "Мотоциклы для европейского рынка. Спидометр в км/ч, часто дублируется в милях. Соответствуют строгим экологическим нормам Евро. Комплектации могут быть богаче, чем базовые для других рынков.",
                examples: ["Спидометр в км/ч и милях", "Соответствие нормам Евро-4/5", "Богатые комплектации", "Немецкие/итальянские документы"]
            },
            "США / Аукцион": {
                description: "Мотоциклы для североамериканского рынка. Главный отличительный признак — спидометр в милях (большие цифры - mph). Фары могут иметь другой режим работы (горят всегда). Могут быть отличия в настройках двигателя и составе выхлопа.",
                examples: ["Спидометр в милях (mph)", "Фары горят постоянно", "Американские настройки двигателя", "Сертификат соответствия EPA"]
            },
            "Другое": {
                description: "Другое происхождение мотоцикла, не подходящее под основные категории.",
                examples: ["Канадский рынок", "Австралийский рынок", "Локальные рынки Азии"]
            }
        },
        auctionTypes: {
            "Без аукционного листа": {
                description: "Покупка мотоцикла у частного перекупщика или небольшого дилера в стране-экспортере (чаще всего Япония) без предоставления официального отчета о состоянии.",
                examples: ["Частный перекупщик в Японии", "Небольшой дилер", "Без официального отчета"]
            },
            "Аукцион Японии": {
                description: "Мотоцикл имеет Аукционный лист — паспорт лота. При выборе данного пункта появляется возможность ввода номера аукционного листа или ссылки на лот.",
                examples: ["USS Tokyo", "JU Nagoya", "ARAI", "CAA"]
            },
            "Аукцион США (битый)": {
                description: "Мотоцикл имеет Аукционный лист — паспорт лота. При выборе данного пункта появляется возможность ввода номера аукционного листа или ссылки на лот.",
                examples: ["Copart", "IAAI", "Manheim"]
            },
            "Европейский / дилер": {
                description: "Покупка мотоцикла у официального дилера или крупного специализированного салона в Европе (например, в Германии, Польше, Чехии и Швейцарии), а также частных продаж.",
                examples: ["Официальный дилер BMW", "Специализированный салон", "Частные продажи в Европе"]
            },
            "Частник по ДКП": {
                description: "Прямая покупка у владельца мотоцикла с оформлением стандартного договора купли-продажи.",
                examples: ["Договор купли-продажи", "Прямая сделка с владельцем", "Российский ПТС"]
            }
        }
    },
    state: {
        reportsDatabase: [],
        inspectionsDatabase: [],
        deferredPrompt: null,
        notificationTimeouts: []
    },
    init() {
        try {
            // Безопасная загрузка из localStorage
            this.state.reportsDatabase = JSON.parse(localStorage.getItem('motodiag_reports') || '[]');
            this.state.inspectionsDatabase = JSON.parse(localStorage.getItem('motodiag_inspections') || '[]');
        } catch (e) {
            console.warn('Ошибка загрузки данных из localStorage:', e);
            this.state.reportsDatabase = [];
            this.state.inspectionsDatabase = [];
        }

        // Инициализация всех модулей с обработкой ошибок
        Object.entries(this.modules).forEach(([name, module]) => {
            try {
                if (module.init) module.init();
            } catch (e) {
                console.error(`Ошибка инициализации модуля ${name}:`, e);
                this.showError('Ошибка загрузки модуля: ' + name);
            }
        });

        // Инициализация базовых компонентов
        this.initBasicComponents();
        
        // Service Worker для PWA
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
                const CACHE_NAME = 'motodiag-v2.4.0';
                const urlsToCache = ['/', '/index.html'];
                self.addEventListener('install', event => {
                    event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
                });
                self.addEventListener('fetch', event => {
                    event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
                });
            `)).catch(() => console.log('SW registration failed'));
        }

        const versionDateEl = document.getElementById('appVersionDate');
        if (versionDateEl) versionDateEl.textContent = new Date().getFullYear();
        
        console.log('МотоДиагностика PRO инициализирована');
    },
    
    initBasicComponents() {
        // Инициализация навигации
        this.initNavigation();
        
        // Инициализация темы
        this.initTheme();
        
        // Инициализация формы
        this.initForm();
        
        // Инициализация кнопки "Наверх"
        this.initScrollToTop();
        
        // Инициализация модального окна
        this.initModal();
        
        // Инициализация подсказок
        this.initTooltips();
        
        // Инициализация всплывающих подсказок для классов и коробок
        this.initEnhancedTooltips();
    },
    
    initNavigation() {
        const navTabs = document.querySelectorAll('.nav-tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        navTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                if (!tabId) return;
                
                navTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                tabContents.forEach(c => {
                    c.classList.remove('active');
                    if (c.id === `${tabId}-tab`) {
                        c.classList.add('active');
                    }
                });
                
                // Обновление данных при переходе на вкладки
                if (tabId === 'database') {
                    app.loadReportsList();
                }
                if (tabId === 'inspections') {
                    app.loadInspectionsList();
                }
                if (tabId === 'stats') {
                    app.updateStatistics();
                }
            });
        });
    },
    
    initTheme() {
        const savedTheme = localStorage.getItem('motodiag_theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        
        const darkThemeCheckbox = document.getElementById('darkTheme');
        if (darkThemeCheckbox) {
            darkThemeCheckbox.checked = savedTheme === 'dark';
            darkThemeCheckbox.addEventListener('change', this.toggleTheme);
        }
        
        const themeToggleHeader = document.getElementById('themeToggleHeader');
        if (themeToggleHeader) {
            themeToggleHeader.addEventListener('click', this.toggleThemeManual);
        }
    },
    
    toggleTheme() {
        const isDark = document.getElementById('darkTheme').checked;
        const theme = isDark ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('motodiag_theme', theme);
    },
    
    toggleThemeManual() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        
        const darkThemeEl = document.getElementById('darkTheme');
        if (darkThemeEl) darkThemeEl.checked = !isDark;
        
        localStorage.setItem('motodiag_theme', newTheme);
    },
    
    // Функции для конвертации пробега
    convertKmToMiles(km) {
        return (km * 0.621371).toFixed(1);
    },

    convertMilesToKm(miles) {
        return (miles / 0.621371).toFixed(1);
    },

    // Обработчики для полей пробега
    initMileageFields() {
        const mileageKm = document.getElementById('mileage_km');
        const mileageMiles = document.getElementById('mileage_miles');
        
        if (!mileageKm || !mileageMiles) return;
        
        // Обработчик для поля км
        mileageKm.addEventListener('input', () => {
            const kmValue = parseFloat(mileageKm.value);
            if (!isNaN(kmValue) && kmValue >= 0) {
                const milesValue = this.convertKmToMiles(kmValue);
                mileageMiles.value = milesValue;
            } else {
                mileageMiles.value = '';
            }
            this.updateProgress();
        });
        
        // Обработчик для поля миль
        mileageMiles.addEventListener('input', () => {
            const milesValue = parseFloat(mileageMiles.value);
            if (!isNaN(milesValue) && milesValue >= 0) {
                const kmValue = this.convertMilesToKm(milesValue);
                mileageKm.value = kmValue;
            } else {
                mileageKm.value = '';
            }
            this.updateProgress();
        });
    },
    
    initForm() {
        // Заполнение списка моделей при выборе марки
        const brandSelect = document.getElementById('brand');
        const modelSelect = document.getElementById('model');
        
        if (brandSelect && modelSelect) {
            brandSelect.addEventListener('change', function() {
                const brand = this.value;
                const isCustomBrand = brand === 'Другая марка';
                
                // Показываем/скрываем поле для ввода кастомной марки
                const brandCustom = document.getElementById('brand_custom');
                if (brandCustom) {
                    brandCustom.classList.toggle('hidden', !isCustomBrand);
                    if (!isCustomBrand) brandCustom.value = '';
                }
                
                // Обновляем список моделей
                modelSelect.innerHTML = '<option value="">-- Выберите модель --</option>';
                
                if (brand && app.config.modelsDatabase[brand]) {
                    app.config.modelsDatabase[brand].forEach(model => {
                        const option = document.createElement('option');
                        option.value = model;
                        option.textContent = model;
                        modelSelect.appendChild(option);
                    });
                }
                
                // Добавляем опцию для кастомной модели
                const customOption = document.createElement('option');
                customOption.value = 'Другая модель';
                customOption.textContent = 'Другая модель';
                modelSelect.appendChild(customOption);
                
                app.updateProgress();
            });
            
            modelSelect.addEventListener('change', function() {
                const isCustomModel = this.value === 'Другая модель';
                const modelCustom = document.getElementById('model_custom');
                if (modelCustom) {
                    modelCustom.classList.toggle('hidden', !isCustomModel);
                    if (!isCustomModel) modelCustom.value = '';
                }
                app.updateProgress();
            });
        }
        
        // Инициализация полей пробега
        this.initMileageFields();
        
        // Обработчик для решения (показ/скрытие полей проверки)
        const decisionSelect = document.getElementById('decision');
        const inspectionFields = document.getElementById('inspectionFields');
        
        if (decisionSelect && inspectionFields) {
            decisionSelect.addEventListener('change', function() {
                const showInspectionFields = this.value === '📅 Запланировать проверку';
                inspectionFields.classList.toggle('hidden', !showInspectionFields);
                
                if (showInspectionFields) {
                    // Устанавливаем дату по умолчанию (завтра)
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    const dateInput = document.getElementById('inspection_date');
                    if (dateInput) {
                        dateInput.value = tomorrow.toISOString().split('T')[0];
                    }
                    
                    // Устанавливаем время по умолчанию
                    const timeInput = document.getElementById('inspection_time');
                    if (timeInput) {
                        timeInput.value = '10:00';
                    }
                }
            });
        }
        
        // Обработчики для кнопок формы
        const generateBtn = document.getElementById('generateBtn');
        const saveToDbBtn = document.getElementById('saveToDbBtn');
        const clearFormBtn = document.getElementById('clearFormBtn');
        const copyBtn = document.getElementById('copyBtn');
        
        if (generateBtn) generateBtn.addEventListener('click', () => this.generateReport());
        if (saveToDbBtn) saveToDbBtn.addEventListener('click', () => this.saveReportToDatabase());
        if (clearFormBtn) clearFormBtn.addEventListener('click', () => this.clearForm());
        if (copyBtn) copyBtn.addEventListener('click', () => this.copyToClipboard());
        
        // Автосохранение формы
        this.setupAutoSave();
        
        // Загрузка сохраненных данных формы
        this.loadFormData();
        
        // Обновление прогресса
        this.updateProgress();
    },
    
    initScrollToTop() {
        const btn = document.getElementById('scrollToTopBtn');
        if (!btn) return;
        
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.pageYOffset > 300);
        });
        
        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },
    
    initModal() {
        const modal = document.getElementById('reportModal');
        const modalClose = document.getElementById('modalClose');
        const closeModalBtn = document.getElementById('closeModal');
        const copyModalReportBtn = document.getElementById('copyModalReport');
        
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
        
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
        
        if (copyModalReportBtn) {
            copyModalReportBtn.addEventListener('click', () => {
                this.copyModalReport();
            });
        }
        
        // Закрытие модалки по клику вне контента
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    },
    
    initTooltips() {
        let activeTooltip = null;
        
        function showTooltip(element, text) {
            // Удаляем существующую подсказку
            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }
            
            // Создаем новую подсказку
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = text;
            
            // Позиционируем подсказку
            const rect = element.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.top = (rect.bottom + window.scrollY + 5) + 'px';
            tooltip.style.left = (rect.left + window.scrollX) + 'px';
            tooltip.style.zIndex = '10000';
            
            document.body.appendChild(tooltip);
            activeTooltip = tooltip;
            
            // Автоматическое скрытие через 5 секунд
            setTimeout(() => {
                if (activeTooltip === tooltip) {
                    tooltip.remove();
                    activeTooltip = null;
                }
            }, 5000);
        }
        
        function hideTooltip() {
            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }
        }
        
        // Добавляем обработчики для элементов с подсказками
        const elementsWithTooltips = document.querySelectorAll('[data-tooltip]');
        elementsWithTooltips.forEach(element => {
            element.addEventListener('mouseenter', function() {
                showTooltip(this, this.getAttribute('data-tooltip'));
            });
            element.addEventListener('mouseleave', hideTooltip);
            element.addEventListener('focus', function() {
                showTooltip(this, this.getAttribute('data-tooltip'));
            });
            element.addEventListener('blur', hideTooltip);
        });
    },
    
    // Инициализация всплывающих подсказок для классов мотоциклов и типов коробки
    initEnhancedTooltips() {
        // Обработчики для селекта класса мотоцикла
        const motorcycleClassSelect = document.getElementById('motorcycle_class');
        if (motorcycleClassSelect) {
            motorcycleClassSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('class', motorcycleClassSelect.value);
            });
        }
        
        // Обработчики для селекта типа коробки
        const gearboxTypeSelect = document.getElementById('gearbox_type');
        if (gearboxTypeSelect) {
            gearboxTypeSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('gearbox', gearboxTypeSelect.value);
            });
        }
        
        // Обработчики для селекта происхождения мотоцикла
        const originCountrySelect = document.getElementById('origin_country');
        if (originCountrySelect) {
            originCountrySelect.addEventListener('change', () => {
                this.showEnhancedTooltip('origin', originCountrySelect.value);
            });
        }
        
        // Обработчики для селекта аукциона/поставки
        const auctionTypeSelect = document.getElementById('auction_type');
        if (auctionTypeSelect) {
            auctionTypeSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('auction', auctionTypeSelect.value);
                this.toggleAuctionLotField(auctionTypeSelect.value);
            });
        }
    },
    
    // Показать расширенную всплывающую подсказку
    showEnhancedTooltip(type, value) {
        if (!value) return;
        
        let title = '';
        let description = '';
        let examples = '';
        
        if (type === 'class' && this.config.motorcycleClasses[value]) {
            const classInfo = this.config.motorcycleClasses[value];
            title = value;
            description = classInfo.description;
            examples = classInfo.examples.join(', ');
        } else if (type === 'gearbox' && this.config.gearboxTypes[value]) {
            title = value;
            description = this.config.gearboxTypes[value];
        } else if (type === 'origin' && this.config.originCountries[value]) {
            const originInfo = this.config.originCountries[value];
            title = value;
            description = originInfo.description;
            examples = originInfo.examples.join(', ');
        } else if (type === 'auction' && this.config.auctionTypes[value]) {
            const auctionInfo = this.config.auctionTypes[value];
            title = value;
            description = auctionInfo.description;
            examples = auctionInfo.examples.join(', ');
        } else {
            return;
        }
        
        this.showEnhancedToast(title, description, examples);
    },
    
    // Показать расширенное toast-уведомление
    showEnhancedToast(title, description, examples = '') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = 'toast toast-info toast-enhanced';
        toast.setAttribute('role', 'status');
        
        let toastContent = `
            <div class="toast-title">${this.escapeHtml(title)}</div>
            <div class="toast-description">${this.escapeHtml(description)}</div>
        `;
        
        if (examples) {
            toastContent += `
                <div class="toast-examples">
                    <strong>Примеры:</strong> ${this.escapeHtml(examples)}
                </div>
            `;
        }
        
        toast.innerHTML = toastContent;
        
        container.appendChild(toast);
        
        // Аудио/вибро по настройкам
        const vibrationEl = document.getElementById('vibration');
        const soundEl = document.getElementById('soundNotifications');
        
        if (vibrationEl && vibrationEl.checked && navigator.vibrate) {
            navigator.vibrate(50);
        }
        
        requestAnimationFrame(() => toast.classList.add('show'));
        
        // Автоматическое скрытие через 7-8 секунд в зависимости от длины текста
        const textLength = title.length + description.length + examples.length;
        const duration = textLength > 200 ? 8000 : 7000;
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, duration);
    },
    
    // Показать/скрыть поле номера аукционного лота
    toggleAuctionLotField(auctionType) {
        const auctionLotGroup = document.getElementById('auctionLotNumberGroup');
        if (!auctionLotGroup) return;
        
        // Показываем поле только для аукционов Японии и США
        const showLotField = auctionType === 'Аукцион Японии' || auctionType === 'Аукцион США (битый)';
        auctionLotGroup.classList.toggle('hidden', !showLotField);
    },
    
    updateProgress() {
        const brandEl = document.getElementById('brand');
        const modelEl = document.getElementById('model');
        const yearEl = document.getElementById('year');
        const mileageKm = document.getElementById('mileage_km');
        const mileageMiles = document.getElementById('mileage_miles');
        
        if (!brandEl || !modelEl || !yearEl) return;
        
        let brandFilled = !!brandEl.value;
        let modelFilled = !!modelEl.value;
        let mileageFilled = !!(mileageKm && mileageKm.value) || !!(mileageMiles && mileageMiles.value);
        
        if (brandEl.value === 'Другая марка') {
            const brandCustom = document.getElementById('brand_custom');
            brandFilled = brandCustom && brandCustom.value.trim() !== '';
        }
        
        if (modelEl.value === 'Другая модель') {
            const modelCustom = document.getElementById('model_custom');
            modelFilled = modelCustom && modelCustom.value.trim() !== '';
        }
        
        const filled = (brandFilled ? 1 : 0) + (modelFilled ? 1 : 0) + (yearEl.value ? 1 : 0) + (mileageFilled ? 1 : 0);
        const progress = (filled / 4) * 100;
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (progressText) {
            if (progress === 100) {
                progressText.textContent = '✅ Все основные данные заполнены!';
                progressText.style.color = 'var(--success-color)';
            } else {
                progressText.textContent = `Заполнено ${filled} из 4 основных полей`;
                progressText.style.color = 'var(--text-light)';
            }
        }
    },
    
    setupAutoSave() {
        const form = document.getElementById('diagnosticForm');
        if (!form) return;
        
        const autoSaveHandler = () => {
            this.saveFormData();
            this.updateProgress();
            this.showSaveIndicator();
        };
        
        // Используем debounce для оптимизации
        const debouncedHandler = this.debounce(autoSaveHandler, 500);
        
        // Обработчики для всех элементов формы
        const formElements = form.querySelectorAll('input, select, textarea');
        formElements.forEach(element => {
            element.addEventListener('input', debouncedHandler);
            element.addEventListener('change', debouncedHandler);
        });
    },
    
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    saveFormData() {
        try {
            const form = document.getElementById('diagnosticForm');
            if (!form) return;
            
            const formData = new FormData(form);
            const data = {};
            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            localStorage.setItem('motodiag_form_data', JSON.stringify(data));
        } catch (e) {
            console.warn('Ошибка сохранения формы:', e);
        }
    },
    
    loadFormData() {
        try {
            const savedData = localStorage.getItem('motodiag_form_data');
            if (!savedData) return;
            
            const data = JSON.parse(savedData);
            Object.keys(data).forEach(key => {
                const el = document.getElementById(key);
                if (el) el.value = data[key];
            });
            
            // Обновляем список моделей если выбрана марка
            const brandEl = document.getElementById('brand');
            if (brandEl && data.brand) {
                brandEl.dispatchEvent(new Event('change'));
                
                // Устанавливаем выбранную модель после обновления списка
                setTimeout(() => {
                    const modelEl = document.getElementById('model');
                    if (modelEl && data.model) {
                        modelEl.value = data.model;
                        modelEl.dispatchEvent(new Event('change'));
                    }
                }, 0);
            }
            
            // Показываем/скрываем дополнительные поля
            const brandCustom = document.getElementById('brand_custom');
            const modelCustom = document.getElementById('model_custom');
            const inspectionFields = document.getElementById('inspectionFields');
            const auctionLotGroup = document.getElementById('auctionLotNumberGroup');
            
            if (brandCustom) brandCustom.classList.toggle('hidden', data.brand !== 'Другая марка');
            if (modelCustom) modelCustom.classList.toggle('hidden', data.model !== 'Другая модель');
            if (inspectionFields) inspectionFields.classList.toggle('hidden', data.decision !== '📅 Запланировать проверку');
            if (auctionLotGroup && data.auction_type) {
                this.toggleAuctionLotField(data.auction_type);
            }
            
        } catch (e) {
            console.warn('Ошибка загрузки формы:', e);
        }
    },
    
    showSaveIndicator() {
        const indicator = document.getElementById('saveIndicator');
        if (indicator) {
            indicator.classList.add('visible');
            setTimeout(() => indicator.classList.remove('visible'), 2000);
        }
    },
    
    validateForm() {
        let isValid = true;
        let errorMessage = '';
        let firstErrorElement = null; // Добавляем переменную для первого ошибочного поля
        
        const brandEl = document.getElementById('brand');
        const modelEl = document.getElementById('model');
        const yearEl = document.getElementById('year');
        
        if (!brandEl || !modelEl || !yearEl) return false;
        
        // Проверка обязательных полей
        if (!brandEl.value) {
            isValid = false;
            brandEl.style.borderColor = 'var(--danger-color)';
            errorMessage = 'Выберите марку мотоцикла';
            if (!firstErrorElement) firstErrorElement = brandEl; // Запоминаем первое ошибочное поле
        } else {
            brandEl.style.borderColor = '';
        }
        
        if (!modelEl.value) {
            isValid = false;
            modelEl.style.borderColor = 'var(--danger-color)';
            errorMessage = 'Выберите модель мотоцикла';
            if (!firstErrorElement) firstErrorElement = modelEl;
        } else {
            modelEl.style.borderColor = '';
        }
        
        if (!yearEl.value) {
            isValid = false;
            yearEl.style.borderColor = 'var(--danger-color)';
            errorMessage = 'Укажите год выпуска';
            if (!firstErrorElement) firstErrorElement = yearEl;
        } else {
            yearEl.style.borderColor = '';
        }
        
        // Проверка кастомных полей
        if (brandEl.value === 'Другая марка') {
            const brandCustom = document.getElementById('brand_custom');
            if (brandCustom && !brandCustom.value.trim()) {
                isValid = false;
                brandCustom.style.borderColor = 'var(--danger-color)';
                errorMessage = 'Укажите марку в поле "Введите марку"';
                if (!firstErrorElement) firstErrorElement = brandCustom;
            } else if (brandCustom) {
                brandCustom.style.borderColor = '';
            }
        }
        
        if (modelEl.value === 'Другая модель') {
            const modelCustom = document.getElementById('model_custom');
            if (modelCustom && !modelCustom.value.trim()) {
                isValid = false;
                modelCustom.style.borderColor = 'var(--danger-color)';
                errorMessage = 'Укажите модель в поле "Введите модель"';
                if (!firstErrorElement) firstErrorElement = modelCustom;
            } else if (modelCustom) {
                modelCustom.style.borderColor = '';
            }
        }
        
        // Проверка года
        const year = parseInt(yearEl.value, 10);
        if (yearEl.value && (isNaN(year) || year < 1990 || year > 2030)) {
            isValid = false;
            yearEl.style.borderColor = 'var(--danger-color)';
            errorMessage = 'Год выпуска должен быть между 1990 и 2030';
            if (!firstErrorElement) firstErrorElement = yearEl;
        }
        
        // Проверка полей для запланированной проверки
        const decision = document.getElementById('decision')?.value;
        if (decision === '📅 Запланировать проверку') {
            const requiredFields = ['inspection_date', 'inspection_time', 'inspection_address', 'customer_phone'];
            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                if (field && !field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'var(--danger-color)';
                    errorMessage = 'Для запланированной проверки заполните все обязательные поля';
                    if (!firstErrorElement) firstErrorElement = field;
                } else if (field) {
                    field.style.borderColor = '';
                }
            });
        }
        
        if (!isValid) {
            this.showToast(errorMessage || 'Пожалуйста, заполните все обязательные поля', 'warning');
            
            // Анимация тряски для кнопки генерации
            const generateBtn = document.getElementById('generateBtn');
            if (generateBtn) {
                generateBtn.classList.add('shake');
                setTimeout(() => generateBtn.classList.remove('shake'), 500);
            }
            
            // Прокрутка к первому полю с ошибкой
            if (firstErrorElement) {
                setTimeout(() => {
                    firstErrorElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    // Добавляем дополнительную анимацию для привлечения внимания
                    firstErrorElement.classList.add('pulse');
                    setTimeout(() => firstErrorElement.classList.remove('pulse'), 1500);
                    
                    // Фокусируемся на поле для удобства ввода
                    if (firstErrorElement.tagName === 'INPUT' || firstErrorElement.tagName === 'SELECT') {
                        firstErrorElement.focus();
                    }
                }, 300);
            }
        }
        
        return isValid;
    },
    
    generateReport() {
        if (!this.validateForm()) return;
        
        try {
            const form = document.getElementById('diagnosticForm');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            const report = this.generateReportText(data);
            
            const output = document.getElementById('output');
            const outputCard = document.getElementById('outputCard');
            const copyBtn = document.getElementById('copyBtn');
            
            if (output) output.textContent = report;
            if (outputCard) outputCard.classList.remove('hidden');
            if (copyBtn) copyBtn.classList.remove('hidden');
            
            this.calculateAndShowSavings(data);
            
            if (outputCard) outputCard.scrollIntoView({ behavior: 'smooth' });
            this.showToast('Отчет успешно сгенерирован!', 'success');
        } catch (e) {
            console.error('Ошибка генерации отчета:', e);
            this.showToast('Ошибка при создании отчета', 'warning');
        }
    },
    
    generateReportText(data) {
        const brand = data.brand === 'Другая марка' ? data.brand_custom : data.brand;
        const model = data.model === 'Другая модель' ? data.model_custom : data.model;
        
        let report = `🏍️ Мотоподбор, осмотр мотоцикла перед покупкой, выездная диагностика, подбор под ключ.\n`;
        report += `📞 Сергей Ландик 8 950 005-05-08\n`;
        report += `🌐 Сайт: motopodbor.ru\n\n`;
        
        report += `🏍️ ${brand} ${model}\n`;
        if (data.year) report += `📅 Год выпуска: ${data.year}\n`;
        
        // Отображение пробега в обеих единицах
        if (data.mileage_km) {
            const km = parseFloat(data.mileage_km);
            if (!isNaN(km)) {
                const miles = this.convertKmToMiles(km);
                report += `🛣️ Пробег: ${km} тыс. км (${miles} тыс. миль)\n`;
            }
        } else if (data.mileage_miles) {
            const miles = parseFloat(data.mileage_miles);
            if (!isNaN(miles)) {
                const km = this.convertMilesToKm(miles);
                report += `🛣️ Пробег: ${miles} тыс. миль (${km} тыс. км)\n`;
            }
        }
        
        // Добавляем информацию о происхождении и аукционе
        if (data.origin_country) report += `🌍 Происхождение: ${data.origin_country}\n`;
        if (data.auction_type) report += `🏷️ Аукцион/поставка: ${data.auction_type}\n`;
        if (data.auction_lot_number) report += `📋 Номер лота/ссылка: ${data.auction_lot_number}\n`;
        
        if (data.motorcycle_class) report += `🏷️ Класс: ${data.motorcycle_class}\n`;
        
        // Добавляем юридическую информацию
        if (data.legal_check) report += `📋 Юридическая проверка: ${data.legal_check}\n`;
        if (data.legal_status) report += `⚖️ Статус: ${data.legal_status}\n`;
        if (data.legal_comment) report += `📝 Комментарий: ${data.legal_comment}\n`;
        
        report += `\n💼 ВЫВОДЫ:\n`;
        if (data.key_finding) report += `🔑 Ключевая находка: ${data.key_finding}\n`;
        if (data.expert_verdict) report += `👨‍💼 Вердикт эксперта: ${data.expert_verdict}\n`;
        
        if (data.decision) {
            report += `🤔 Решение: ${data.decision}\n`;
            if (data.decision === '📅 Запланировать проверку') {
                if (data.inspection_date && data.inspection_time) {
                    const inspectionDate = new Date(data.inspection_date + 'T' + data.inspection_time);
                    report += `📅 Запланированная проверка: ${inspectionDate.toLocaleString('ru-RU')}\n`;
                }
                if (data.inspection_address) report += `📍 Адрес: ${data.inspection_address}\n`;
            }
        }
        
        if (data.price || data.objective_cost || data.seller_discount || data.investment_cost) {
            report += `\n💰 ФИНАНСОВАЯ ИНФОРМАЦИЯ:\n`;
            if (data.price) report += `💵 Цена продавца: ${data.price}\n`;
            if (data.objective_cost) report += `📊 Объективная стоимость: ${data.objective_cost}\n`;
            if (data.seller_discount) report += `🎁 Скидка с продавца: ${data.seller_discount}\n`;
            if (data.investment_cost) report += `🔧 Стоимость вложений: ${data.investment_cost}\n`;
        }
        
        report += `\n────────────────────────────\n`;
        report += `📞 Готовы найти свой идеальный мотоцикл?\n`;
        report += `Звоните: 8 950 005-05-08\n`;
        report += `Мы поможем сделать правильный выбор! ✅`;
        
        return report;
    },
    
    calculateAndShowSavings(data) {
        const price = this.parseMoneyValue(data.price);
        const objectiveCost = this.parseMoneyValue(data.objective_cost);
        const sellerDiscount = this.parseMoneyValue(data.seller_discount);
        const investmentCost = this.parseMoneyValue(data.investment_cost);
        const savingsAlert = document.getElementById('savingsAlert');
        
        if (price && objectiveCost && savingsAlert) {
            const savings = (objectiveCost - (price - sellerDiscount)) - investmentCost;
            if (savings > 0) {
                savingsAlert.textContent = `💵 Общая экономия для клиента: ${this.formatMoney(savings)}`;
                savingsAlert.classList.remove('hidden');
            } else {
                savingsAlert.classList.add('hidden');
            }
        } else if (savingsAlert) {
            savingsAlert.classList.add('hidden');
        }
    },
    
    parseMoneyValue(value) {
        if (!value) return 0;
        const clean = value.toString().replace(/\s/g, '').replace(',', '.');
        return parseFloat(clean) || 0;
    },
    
    formatMoney(amount) {
        return new Intl.NumberFormat('ru-RU', { 
            style: 'currency', 
            currency: 'RUB', 
            minimumFractionDigits: 0 
        }).format(amount);
    },
    
    saveReportToDatabase() {
        if (!this.validateForm()) return;
        
        try {
            const form = document.getElementById('diagnosticForm');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            const brand = data.brand === 'Другая марка' ? data.brand_custom : data.brand;
            const model = data.model === 'Другая модель' ? data.model_custom : data.model;
            
            const report = {
                id: Date.now().toString(),
                timestamp: new Date().toISOString(),
                ...data,
                brand,
                model,
                generated_text: document.getElementById('output')?.textContent || ''
            };
            
            this.state.reportsDatabase.push(report);
            localStorage.setItem('motodiag_reports', JSON.stringify(this.state.reportsDatabase));
            
            this.showToast('Отчет успешно сохранен в базу данных!', 'success');
            this.loadReportsList();
            this.updateStatistics();
        } catch (e) {
            console.error('Ошибка сохранения отчета:', e);
            this.showToast('Ошибка при сохранении отчета', 'warning');
        }
    },
    
    clearForm() {
        if (!confirm('Вы уверены, что хотите очистить все поля формы?')) return;
        
        const form = document.getElementById('diagnosticForm');
        if (form) form.reset();
        
        localStorage.removeItem('motodiag_form_data');
        
        const outputCard = document.getElementById('outputCard');
        const savingsAlert = document.getElementById('savingsAlert');
        const inspectionFields = document.getElementById('inspectionFields');
        const brandCustom = document.getElementById('brand_custom');
        const modelCustom = document.getElementById('model_custom');
        const auctionLotGroup = document.getElementById('auctionLotNumberGroup');
        
        if (outputCard) outputCard.classList.add('hidden');
        if (savingsAlert) savingsAlert.classList.add('hidden');
        if (inspectionFields) inspectionFields.classList.add('hidden');
        if (brandCustom) brandCustom.classList.add('hidden');
        if (modelCustom) modelCustom.classList.add('hidden');
        if (auctionLotGroup) auctionLotGroup.classList.add('hidden');
        
        // Сбрасываем список моделей
        const brandSelect = document.getElementById('brand');
        if (brandSelect) {
            brandSelect.value = '';
            brandSelect.dispatchEvent(new Event('change'));
        }
        
        this.updateProgress();
        this.showToast('Форма очищена', 'success');
    },
    
    copyToClipboard() {
        try {
            const text = document.getElementById('output')?.textContent || '';
            if (!text) {
                this.showToast('Нет текста для копирования', 'warning');
                return;
            }
            
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Отчет скопирован в буфер обмена для соцсетей!', 'success');
            }).catch(() => {
                // Fallback для старых браузеров
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.showToast('Отчет скопирован в буфер обмена для соцсетей!', 'success');
            });
        } catch (e) {
            console.error('Ошибка копирования:', e);
            this.showToast('Ошибка при копировании', 'warning');
        }
    },
    
    copyModalReport() {
        try {
            const text = document.getElementById('modalOutput')?.textContent || '';
            if (!text) {
                this.showToast('Нет текста для копирования', 'warning');
                return;
            }
            
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Отчет скопирован в буфер обмена для соцсетей!', 'success');
            }).catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.showToast('Отчет скопирован в буфер обмена для соцсетей!', 'success');
            });
        } catch (e) {
            console.error('Ошибка копирования:', e);
            this.showToast('Ошибка при копировании', 'warning');
        }
    },
    
    showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.setAttribute('role', 'status');
        toast.textContent = message;
        
        container.appendChild(toast);
        
        // Аудио/вибро по настройкам
        const vibrationEl = document.getElementById('vibration');
        const soundEl = document.getElementById('soundNotifications');
        
        if (vibrationEl && vibrationEl.checked && navigator.vibrate) {
            navigator.vibrate(80);
        }
        
        requestAnimationFrame(() => toast.classList.add('show'));
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 4000);
    },
    
    showError(message) {
        this.showToast(message, 'warning');
    },
    
    escapeHtml(str) {
        return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    },
    
    // Методы для работы с базой данных
    loadReportsList() {
        const reportsList = document.getElementById('reportsList');
        if (!reportsList) return;
        
        const searchValue = (document.getElementById('searchReports')?.value || '').toLowerCase();
        
        if (this.state.reportsDatabase.length === 0) {
            reportsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Нет сохраненных отчетов</div>';
            return;
        }
        
        const filtered = this.state.reportsDatabase.filter(report => {
            if (!searchValue) return true;
            
            return (
                report.brand?.toLowerCase().includes(searchValue) ||
                report.model?.toLowerCase().includes(searchValue) ||
                (report.year && String(report.year).includes(searchValue)) ||
                report.vin?.toLowerCase().includes(searchValue) ||
                report.engine_number?.toLowerCase().includes(searchValue) ||
                report.license_plate?.toLowerCase().includes(searchValue)
            );
        }).reverse();
        
        if (filtered.length === 0) {
            reportsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Отчеты не найдены</div>';
            return;
        }
        
        reportsList.innerHTML = filtered.map(report => `
            <div class="report-item">
                <div class="report-header">
                    <div class="report-title">${this.escapeHtml(report.brand)} ${this.escapeHtml(report.model)} (${this.escapeHtml(report.year)})</div>
                    <div class="report-actions">
                        <button class="action-btn" style="background: var(--secondary-color); color: white;" onclick="app.viewReport('${report.id}')" aria-label="Просмотреть отчет">👁️</button>
                        <button class="action-btn" style="background: var(--warning-color); color: white;" onclick="app.editReport('${report.id}')" aria-label="Редактировать отчет">✏️</button>
                        <button class="action-btn" style="background: var(--danger-color); color: white;" onclick="app.deleteReport('${report.id}')" aria-label="Удалить отчет">🗑️</button>
                    </div>
                </div>
                <div class="report-meta">
                    <div>Пробег: ${this.escapeHtml(report.mileage_km || report.mileage_miles || '0')} ${report.mileage_km ? 'тыс.км' : report.mileage_miles ? 'тыс.миль' : ''}</div>
                    <div>Цена: ${this.escapeHtml(report.price || 'Не указана')}</div>
                    <div>${report.vin ? `VIN: ${this.escapeHtml(report.vin)}` : 'VIN: Не указан'}</div>
                    <div>${report.engine_number ? `Двигатель: ${this.escapeHtml(report.engine_number)}` : 'Двигатель: Не указан'}</div>
                    <div>${report.license_plate ? `Номер: ${this.escapeHtml(report.license_plate)}` : 'Номер: Не указан'}</div>
                    <div>Класс: ${this.escapeHtml(report.motorcycle_class || 'Не указан')}</div>
                    <div>Решение: ${this.escapeHtml(report.decision || 'Не указано')}</div>
                </div>
            </div>
        `).join('');
    },
    
    viewReport(reportId) {
        const report = this.state.reportsDatabase.find(r => r.id === reportId);
        if (!report) return;
        
        const modalVin = document.getElementById('modalVin');
        const modalEngineNumber = document.getElementById('modalEngineNumber');
        const modalLicensePlate = document.getElementById('modalLicensePlate');
        const modalBikeInfo = document.getElementById('modalBikeInfo');
        const modalOutput = document.getElementById('modalOutput');
        const reportModal = document.getElementById('reportModal');
        
        if (modalVin) modalVin.textContent = report.vin ? this.escapeHtml(report.vin) : 'Не указан';
        if (modalEngineNumber) modalEngineNumber.textContent = report.engine_number ? this.escapeHtml(report.engine_number) : 'Не указан';
        if (modalLicensePlate) modalLicensePlate.textContent = report.license_plate ? this.escapeHtml(report.license_plate) : 'Не указан';
        if (modalBikeInfo) modalBikeInfo.textContent = `${this.escapeHtml(report.brand)} ${this.escapeHtml(report.model)} (${this.escapeHtml(report.year)})`;
        if (modalOutput) modalOutput.textContent = report.generated_text || '';
        if (reportModal) reportModal.classList.remove('hidden');
    },
    
    editReport(reportId) {
        const report = this.state.reportsDatabase.find(r => r.id === reportId);
        if (!report) return;
        
        // Заполняем форму данными отчета
        Object.keys(report).forEach(key => {
            const el = document.getElementById(key);
            if (el && report[key] !== undefined && report[key] !== null) {
                el.value = report[key];
            }
        });
        
        // Обновляем список моделей
        const brandSelect = document.getElementById('brand');
        if (brandSelect && report.brand) {
            brandSelect.value = report.brand;
            brandSelect.dispatchEvent(new Event('change'));
            
            // Устанавливаем модель после обновления списка
            setTimeout(() => {
                const modelSelect = document.getElementById('model');
                if (modelSelect && report.model) {
                    modelSelect.value = report.model;
                    modelSelect.dispatchEvent(new Event('change'));
                }
            }, 0);
        }
        
        // Показываем/скрываем дополнительные поля
        const brandCustom = document.getElementById('brand_custom');
        const modelCustom = document.getElementById('model_custom');
        const inspectionFields = document.getElementById('inspectionFields');
        const auctionLotGroup = document.getElementById('auctionLotNumberGroup');
        
        if (brandCustom) brandCustom.classList.toggle('hidden', report.brand !== 'Другая марка');
        if (modelCustom) modelCustom.classList.toggle('hidden', report.model !== 'Другая модель');
        if (inspectionFields) inspectionFields.classList.toggle('hidden', report.decision !== '📅 Запланировать проверку');
        if (auctionLotGroup && report.auction_type) {
            this.toggleAuctionLotField(report.auction_type);
        }
        
        this.updateProgress();
        
        // Переключаемся на вкладку отчета
        const reportTab = document.querySelector('.nav-tab[data-tab="report"]');
        if (reportTab) reportTab.click();
        
        this.showToast(`Редактирование отчета: ${report.brand} ${report.model}`, 'info');
    },
    
    deleteReport(reportId) {
        if (!confirm('Вы уверены, что хотите удалить этот отчет?')) return;
        
        this.state.reportsDatabase = this.state.reportsDatabase.filter(r => r.id !== reportId);
        localStorage.setItem('motodiag_reports', JSON.stringify(this.state.reportsDatabase));
        
        this.loadReportsList();
        this.updateStatistics();
        this.showToast('Отчет успешно удален', 'success');
    },
    
    // Методы для работы со статистикой
    updateStatistics(period = 'week') {
        const now = new Date();
        let startDate = new Date(now - 7 * 24 * 60 * 60 * 1000); // неделя по умолчанию
        
        if (period === 'month') startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        if (period === 'quarter') {
            const q = Math.floor(now.getMonth() / 3);
            startDate = new Date(now.getFullYear(), q * 3, 1);
        }
        if (period === 'year') startDate = new Date(now.getFullYear(), 0, 1);
        
        const periodReports = this.state.reportsDatabase.filter(r => new Date(r.timestamp) >= startDate);
        const totalReports = periodReports.length;
        const purchased = periodReports.filter(r => r.decision === '✅ Куплен').length;
        
        let totalSavings = 0;
        periodReports.forEach(r => {
            const price = this.parseMoneyValue(r.price);
            const objectiveCost = this.parseMoneyValue(r.objective_cost);
            const sellerDiscount = this.parseMoneyValue(r.seller_discount);
            const investmentCost = this.parseMoneyValue(r.investment_cost);
            
            if (price && objectiveCost) {
                const savings = (objectiveCost - (price - sellerDiscount)) - investmentCost;
                if (savings > 0) totalSavings += savings;
            }
        });
        
        const avgSavings = purchased > 0 ? totalSavings / purchased : 0;
        
        const brandCounts = {};
        periodReports.forEach(r => {
            if (r.brand) brandCounts[r.brand] = (brandCounts[r.brand] || 0) + 1;
        });
        
        const brandKeys = Object.keys(brandCounts);
        const popularBrand = brandKeys.length > 0 ? 
            brandKeys.reduce((a, b) => brandCounts[a] > brandCounts[b] ? a : b) : 
            'Нет данных';
        
        const plannedInspections = this.state.inspectionsDatabase.filter(i => i.status === 'planned').length;
        const completedInspections = this.state.inspectionsDatabase.filter(i => i.status === 'completed').length;
        
        const totalReportsEl = document.getElementById('totalReports');
        const successfulDealsEl = document.getElementById('successfulDeals');
        const avgSavingsEl = document.getElementById('avgSavings');
        const popularBrandEl = document.getElementById('popularBrand');
        const plannedInspectionsEl = document.getElementById('plannedInspections');
        const completedInspectionsEl = document.getElementById('completedInspections');
        
        if (totalReportsEl) totalReportsEl.textContent = totalReports;
        if (successfulDealsEl) successfulDealsEl.textContent = purchased;
        if (avgSavingsEl) avgSavingsEl.textContent = this.formatMoney(Math.round(avgSavings));
        if (popularBrandEl) popularBrandEl.textContent = popularBrand;
        if (plannedInspectionsEl) plannedInspectionsEl.textContent = plannedInspections;
        if (completedInspectionsEl) completedInspectionsEl.textContent = completedInspections;
    },
    
    // Дополнительные методы для проверок (упрощенная версия)
    loadInspectionsList() {
        const inspectionsList = document.getElementById('inspectionsList');
        if (!inspectionsList) return;
        
        if (this.state.inspectionsDatabase.length === 0) {
            inspectionsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Нет запланированных проверок</div>';
            return;
        }
        
        // Простая реализация для демонстрации
        inspectionsList.innerHTML = this.state.inspectionsDatabase.map(inspection => `
            <div class="inspection-item">
                <div class="inspection-header">
                    <div class="inspection-title">${this.escapeHtml(inspection.brand)} ${this.escapeHtml(inspection.model)}</div>
                    <div class="inspection-date">${inspection.date || 'Дата не указана'}</div>
                </div>
                <div class="inspection-details">
                    <div><strong>Адрес:</strong> ${this.escapeHtml(inspection.address || 'Не указан')}</div>
                    <div><strong>Телефон:</strong> ${this.escapeHtml(inspection.phone || 'Не указан')}</div>
                </div>
            </div>
        `).join('');
    }
};

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    try {
        app.init();
        
        // Инициализация поиска
        const searchReports = document.getElementById('searchReports');
        if (searchReports) {
            searchReports.addEventListener('input', () => app.loadReportsList());
        }
        
        const searchInspections = document.getElementById('searchInspections');
        if (searchInspections) {
            searchInspections.addEventListener('input', () => app.loadInspectionsList());
        }
        
        // Инициализация кнопок статистики
        document.querySelectorAll('.grid-btn[data-period]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.grid-btn[data-period]').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                app.updateStatistics(this.getAttribute('data-period'));
            });
        });
        
        // Инициализация кнопки генерации статистики
        const generateStatsBtn = document.getElementById('generateStatsBtn');
        if (generateStatsBtn) {
            generateStatsBtn.addEventListener('click', () => {
                // Простая реализация для демонстрации
                const statsOutput = document.getElementById('statsOutput');
                const copyStatsBtn = document.getElementById('copyStatsBtn');
                
                if (statsOutput) {
                    statsOutput.textContent = 'Функция генерации поста статистики в разработке';
                    statsOutput.classList.remove('hidden');
                }
                
                if (copyStatsBtn) {
                    copyStatsBtn.classList.remove('hidden');
                }
            });
        }
        
    } catch (e) {
        console.error('Критическая ошибка инициализации:', e);
        alert('Ошибка загрузки приложения. Попробуйте обновить страницу.');
    }
});
