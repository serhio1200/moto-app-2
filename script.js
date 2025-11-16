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
                description: "Мотоцикл имеет Аукционный лист — паспорт лота. При выборе данного пункта появляется возможность ввода номера аукционного листа или ссылки на лot.",
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
        },
        legalStatuses: {
            "На учете Физического Лица": {
                description: "Транспортное средство зарегистрировано на частное лицо (владельца). Все права и обязанности по владению и использованию ТС лежат на этом человеке.",
                examples: ["Частный владелец", "Физическое лицо"]
            },
            "На учете Юридического Лица": {
                description: "Транспортное средство зарегистрировано на компанию, организацию или ИП. Часто это корпоративный автопарк.",
                examples: ["Компания", "Организация", "ИП", "Корпоративный автопарк"]
            },
            "Регистрация приостановлена": {
                description: "Регистрационные действия с этим транспортным средством временно заблокированы государственными органами либо собственником.",
                examples: ["Временная блокировка", "Приостановка регистрации"]
            },
            "Продажа ТС не поставленного на учёт": {
                description: "Это новое или бывшее в употреблении транспортное средство, которое никогда не регистрировалось в ГИБДД. Продавец (часто дилер или частное лицо) продает его по договору купли-продажи (ДКП), и именно вы, как первый владелец, будете ставить его на учет.",
                examples: ["Новый мотоцикл", "Первая регистрация", "Дилерская продажа"]
            },
            "Собственника спортивного инвентаря": {
                description: "Статус может применяться к ТС, которые не считаются полноценными мотоциклом в юридическом смысле, но подлежат регистрации (например, мощные снегоходы, квадроциклы, внедорожники, мотоцикл). Они ставятся на учет в органах Гостехнадзора (или аналогичных), а не в ГИБДД.",
                examples: ["Снегоходы", "Квадроциклы", "Внедорожники", "Регистрация в Гостехнадзоре"]
            },
            "Другое": {
                description: "Другой юридический статус мотоцикла, не подходящий под основные категории.",
                examples: ["Специальные случаи", "Иные юридические статусы"]
            }
        }
    },
    state: {
        reportsDatabase: [],
        inspectionsDatabase: [],
        deferredPrompt: null,
        notificationTimeouts: [],
        editingReportId: null,
        activeToasts: new Set(),
        audioContext: null,
        soundEnabled: true,
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        currentPhotos: {}
    },
    init() {
        try {
            this.state.reportsDatabase = JSON.parse(localStorage.getItem('motodiag_reports') || '[]');
            this.state.inspectionsDatabase = JSON.parse(localStorage.getItem('motodiag_inspections') || '[]');
            
            const savedPhotos = localStorage.getItem('motodiag_current_photos');
            if (savedPhotos) {
                this.state.currentPhotos = JSON.parse(savedPhotos);
            }
        } catch (e) {
            console.warn('Ошибка загрузки данных из localStorage:', e);
            this.state.reportsDatabase = [];
            this.state.inspectionsDatabase = [];
            this.state.currentPhotos = {};
        }

        Object.entries(this.modules).forEach(([name, module]) => {
            try {
                if (module.init) module.init();
            } catch (e) {
                console.error(`Ошибка инициализации модуля ${name}:`, e);
                this.showError('Ошибка загрузки модуля: ' + name);
            }
        });

        this.initBasicComponents();
        
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('data:text/javascript,' + encodeURIComponent(`
                const CACHE_NAME = 'motodiag-v2.6.0';
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
        
        this.checkInspectionReminders();
        
        console.log('МотоДиагностика PRO инициализирована');
    },
    
    initBasicComponents() {
        this.initNavigation();
        this.initTheme();
        this.initForm();
        this.initScrollToTop();
        this.initModal();
        this.initTooltips();
        this.initEnhancedTooltips();
        this.initInspectionsButtons();
        this.initSoundSystem();
        this.initClearStorage();
        this.initAllDataButtons();
        this.initPhotoUploadSystem();
        this.initInsuranceFields();
    },
    
    initInsuranceFields() {
        const insuranceSelect = document.getElementById('insurance');
        const insuranceDate = document.getElementById('insurance_date');
        const techInspectionSelect = document.getElementById('tech_inspection');
        const techInspectionDate = document.getElementById('tech_inspection_date');

        if (insuranceSelect && insuranceDate) {
            insuranceSelect.addEventListener('change', function() {
                const showDate = this.value === 'Действующая до';
                insuranceDate.classList.toggle('hidden', !showDate);
                if (showDate && !insuranceDate.value) {
                    const futureDate = new Date();
                    futureDate.setFullYear(futureDate.getFullYear() + 1);
                    insuranceDate.value = futureDate.toISOString().split('T')[0];
                }
            });
        }

        if (techInspectionSelect && techInspectionDate) {
            techInspectionSelect.addEventListener('change', function() {
                const showDate = this.value === 'Действующий до';
                techInspectionDate.classList.toggle('hidden', !showDate);
                if (showDate && !techInspectionDate.value) {
                    const futureDate = new Date();
                    futureDate.setMonth(futureDate.getMonth() + 6);
                    techInspectionDate.value = futureDate.toISOString().split('T')[0];
                }
            });
        }
    },
    
    initPhotoUploadSystem() {
        this.loadPhotoPreviews();
        
        const photoInputs = document.querySelectorAll('.photo-upload-input');
        photoInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const section = e.target.getAttribute('data-section');
                this.handlePhotoUpload(section, e.target.files);
                e.target.value = '';
            });
        });
        
        console.log('Система загрузки фотографий инициализирована');
    },
    
    handlePhotoUpload(section, files) {
        if (!files || files.length === 0) return;
        
        if (!this.state.currentPhotos[section]) {
            this.state.currentPhotos[section] = [];
        }
        
        const currentCount = this.state.currentPhotos[section].length;
        const maxPhotos = section === 'exterior' ? 1 : 10;
        const remainingSlots = maxPhotos - currentCount;
        
        if (remainingSlots <= 0) {
            this.showToast(`Достигнут лимит в ${maxPhotos} фотографий для этого раздела`, 'warning');
            return;
        }
        
        const filesToProcess = Array.from(files).slice(0, remainingSlots);
        let processedCount = 0;
        
        filesToProcess.forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.state.currentPhotos[section].push({
                        id: (Date.now() + Math.random()).toString(),
                        data: e.target.result,
                        name: file.name,
                        timestamp: new Date().toISOString()
                    });
                    
                    processedCount++;
                    
                    if (processedCount === filesToProcess.length) {
                        this.saveCurrentPhotos();
                        this.updatePhotoPreview(section);
                        this.updatePhotoCounter(section);
                        
                        this.playSound('success');
                        this.showToast(`Добавлено ${processedCount} фотографий в раздел "${this.getSectionName(section)}"`, 'success');
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    },
    
    getSectionName(section) {
        const sectionNames = {
            'exterior': 'Внешний Вид Титульный',
            'geometry': 'Осмотр Фото Общий',
            'engine': 'Состояние ЛКП',
            'consumables': 'Состояние Сиденья',
            'electrical': 'Осмотр Оптики',
            'suspension': 'Рама, Швы, Вторичная окраска',
            'fuel_system': 'Криминал, Вин номера, Номера Двигателя',
            'brake_system': 'Геометрия, Подрамника, руля, вилки…',
            'cooling_system': 'Органы управления',
            'controls': 'Моторный Узел',
            'additional_equipment': 'Топливная система',
            'bodywork': 'Система охлаждения',
            'electrical2': 'Электрооборудование',
            'brake_system2': 'Тормозная система',
            'drive': 'Привод',
            'tires': 'Резина',
            'suspension_front_rear': 'Подвеска перед, зад',
            'computer_diagnostics': 'Компьютерная Диагностика',
            'additional_equipment2': 'Дополнительное оборудование'
        };
        
        return sectionNames[section] || section;
    },
    
    updatePhotoPreview(section) {
        const previewContainer = document.querySelector(`.photo-preview-container[data-section="${section}"]`);
        if (!previewContainer) return;
        
        const photos = this.state.currentPhotos[section] || [];
        
        previewContainer.innerHTML = photos.map(photo => `
            <div class="photo-preview-item">
                <img src="${photo.data}" alt="${photo.name}" class="photo-preview-img">
                <button class="photo-preview-remove" data-section="${section}" data-photo-id="${photo.id}">×</button>
            </div>
        `).join('');
        
        previewContainer.querySelectorAll('.photo-preview-remove').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const section = button.getAttribute('data-section');
                const photoId = button.getAttribute('data-photo-id');
                this.removePhoto(section, photoId);
            });
        });
    },
    
    updatePhotoCounter(section) {
        const counter = document.querySelector(`.photo-counter[data-section="${section}"]`);
        if (counter) {
            const photos = this.state.currentPhotos[section] || [];
            const maxPhotos = section === 'exterior' ? 1 : 10;
            counter.textContent = `Загружено: ${photos.length}/${maxPhotos}`;
            
            if (photos.length >= maxPhotos - 2) {
                counter.style.color = 'var(--warning-color)';
                counter.style.fontWeight = '600';
            } else {
                counter.style.color = 'var(--text-light)';
                counter.style.fontWeight = 'normal';
            }
        }
    },
    
    removePhoto(section, photoId) {
        if (!this.state.currentPhotos[section]) return;
        
        this.state.currentPhotos[section] = this.state.currentPhotos[section].filter(photo => 
            String(photo.id) !== String(photoId)
        );
        
        this.saveCurrentPhotos();
        this.updatePhotoPreview(section);
        this.updatePhotoCounter(section);
        
        this.playSound('success');
        this.showToast('Фотография удалена', 'success');
    },
    
    loadPhotoPreviews() {
        Object.keys(this.state.currentPhotos).forEach(section => {
            this.updatePhotoPreview(section);
            this.updatePhotoCounter(section);
        });
    },
    
    saveCurrentPhotos() {
        try {
            const dataStr = JSON.stringify(this.state.currentPhotos);
            if (dataStr.length > 5 * 1024 * 1024) {
                this.showToast('Внимание: Размер фотографий接近 лимита хранилища', 'warning');
            }
            
            localStorage.setItem('motodiag_current_photos', dataStr);
        } catch (e) {
            console.warn('Ошибка сохранения фотографий:', e);
            if (e.name === 'QuotaExceededError') {
                this.showToast('Превышен лимит хранилища. Удалите некоторые фотографии.', 'warning');
            }
        }
    },
    
    clearAllPhotos() {
        this.state.currentPhotos = {};
        this.saveCurrentPhotos();
        
        const previewContainers = document.querySelectorAll('.photo-preview-container');
        previewContainers.forEach(container => {
            container.innerHTML = '';
        });
        
        const counters = document.querySelectorAll('.photo-counter');
        counters.forEach(counter => {
            const section = counter.getAttribute('data-section');
            const maxPhotos = section === 'exterior' ? 1 : 10;
            counter.textContent = `Загружено: 0/${maxPhotos}`;
            counter.style.color = 'var(--text-light)';
            counter.style.fontWeight = 'normal';
        });
    },
    
    initSoundSystem() {
        try {
            this.state.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            const soundEnabled = localStorage.getItem('motodiag_sound_enabled');
            this.state.soundEnabled = soundEnabled === null ? true : soundEnabled === 'true';
            
            const soundCheckbox = document.getElementById('soundNotifications');
            if (soundCheckbox) {
                soundCheckbox.checked = this.state.soundEnabled;
            }
            
            console.log('Звуковая система инициализирована');
        } catch (e) {
            console.warn('Аудио контекст не поддерживается:', e);
            this.state.soundEnabled = false;
        }
    },
    
    playSound(type) {
        if (!this.state.soundEnabled || !this.state.audioContext) return;
        
        try {
            if (this.state.audioContext.state === 'suspended') {
                this.state.audioContext.resume();
            }
            
            const oscillator = this.state.audioContext.createOscillator();
            const gainNode = this.state.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.state.audioContext.destination);
            
            let frequency = 440;
            let duration = 0.2;
            let typeWave = 'sine';
            
            switch(type) {
                case 'success':
                    frequency = 880;
                    duration = 0.3;
                    typeWave = 'sine';
                    break;
                case 'error':
                    frequency = 220;
                    duration = 0.5;
                    typeWave = 'sawtooth';
                    break;
                case 'notification':
                    frequency = 660;
                    duration = 0.1;
                    typeWave = 'square';
                    break;
                case 'save':
                    frequency = 550;
                    duration = 0.2;
                    typeWave = 'sine';
                    break;
                case 'click':
                    frequency = 500;
                    duration = 0.05;
                    typeWave = 'square';
                    break;
                case 'completion':
                    frequency = 523.25;
                    duration = 0.8;
                    typeWave = 'sine';
                    break;
                case 'warning':
                    frequency = 329.63;
                    duration = 0.7;
                    typeWave = 'sawtooth';
                    break;
            }
            
            oscillator.frequency.value = frequency;
            oscillator.type = typeWave;
            
            gainNode.gain.setValueAtTime(0.3, this.state.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.state.audioContext.currentTime + duration);
            
            oscillator.start(this.state.audioContext.currentTime);
            oscillator.stop(this.state.audioContext.currentTime + duration);
            
        } catch (e) {
            console.warn('Ошибка воспроизведения звука:', e);
        }
    },
    
    initNavigation() {
        const navTabs = document.querySelectorAll('.nav-tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        navTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                if (!tabId) return;
                
                app.playSound('click');
                
                navTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                tabContents.forEach(c => {
                    c.classList.remove('active');
                    if (c.id === `${tabId}-tab`) {
                        c.classList.add('active');
                    }
                });
                
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
        
        const soundCheckbox = document.getElementById('soundNotifications');
        if (soundCheckbox) {
            soundCheckbox.addEventListener('change', (e) => {
                this.state.soundEnabled = e.target.checked;
                localStorage.setItem('motodiag_sound_enabled', this.state.soundEnabled);
                
                if (this.state.soundEnabled) {
                    this.playSound('notification');
                }
            });
        }
    },
    
    toggleTheme() {
        const isDark = document.getElementById('darkTheme').checked;
        const theme = isDark ? 'dark' : 'light';
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('motodiag_theme', theme);
        
        app.playSound('click');
    },
    
    initClearStorage() {
        const clearStorageBtn = document.getElementById('clearStorageBtn');
        if (clearStorageBtn) {
            clearStorageBtn.addEventListener('click', () => {
                if (confirm('Вы уверены, что хотите удалить ВСЕ данные приложения? Это действие нельзя отменить.')) {
                    localStorage.clear();
                    this.state.reportsDatabase = [];
                    this.state.inspectionsDatabase = [];
                    this.state.currentPhotos = {};
                    this.loadReportsList();
                    this.loadInspectionsList();
                    this.updateStatistics();
                    this.showToast('Все данные очищены', 'success');
                    this.playSound('success');
                }
            });
        }
    },
    
    initAllDataButtons() {
        const exportAllDataBtn = document.getElementById('exportAllDataBtn');
        const importAllDataBtn = document.getElementById('importAllDataBtn');
        
        if (exportAllDataBtn) {
            exportAllDataBtn.addEventListener('click', () => {
                this.playSound('click');
                this.exportAllData();
            });
        }
        
        if (importAllDataBtn) {
            importAllDataBtn.addEventListener('click', () => {
                this.playSound('click');
                this.importAllData();
            });
        }
    },
    
    convertKmToMiles(km) {
        return (km * 0.621371).toFixed(1);
    },

    convertMilesToKm(miles) {
        return (miles / 0.621371).toFixed(1);
    },

    initMileageFields() {
        const mileageKm = document.getElementById('mileage_km');
        const mileageMiles = document.getElementById('mileage_miles');
        
        if (!mileageKm || !mileageMiles) return;
        
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
        const brandSelect = document.getElementById('brand');
        const modelSelect = document.getElementById('model');
        
        if (brandSelect && modelSelect) {
            brandSelect.addEventListener('change', function() {
                const brand = this.value;
                const isCustomBrand = brand === 'Другая марка';
                
                const brandCustom = document.getElementById('brand_custom');
                if (brandCustom) {
                    brandCustom.classList.toggle('hidden', !isCustomBrand);
                    if (!isCustomBrand) brandCustom.value = '';
                }
                
                modelSelect.innerHTML = '<option value="">-- Выберите модель --</option>';
                
                if (brand && app.config.modelsDatabase[brand]) {
                    app.config.modelsDatabase[brand].forEach(model => {
                        const option = document.createElement('option');
                        option.value = model;
                        option.textContent = model;
                        modelSelect.appendChild(option);
                    });
                }
                
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
        
        this.initMileageFields();
        
        const decisionSelect = document.getElementById('decision');
        const inspectionFields = document.getElementById('inspectionFields');
        
        if (decisionSelect && inspectionFields) {
            decisionSelect.addEventListener('change', function() {
                const showInspectionFields = this.value === '📅 Запланировать проверку';
                inspectionFields.classList.toggle('hidden', !showInspectionFields);
                
                if (showInspectionFields) {
                    const tomorrow = new Date();
                    tomorrow.setDate(tomorrow.getDate() + 1);
                    const dateInput = document.getElementById('inspection_date');
                    if (dateInput) {
                        dateInput.value = tomorrow.toISOString().split('T')[0];
                    }
                    
                    const timeInput = document.getElementById('inspection_time');
                    if (timeInput) {
                        timeInput.value = '10:00';
                    }
                }
            });
        }
        
        const generateBtn = document.getElementById('generateBtn');
        const saveToDbBtn = document.getElementById('saveToDbBtn');
        const clearFormBtn = document.getElementById('clearFormBtn');
        const copyBtn = document.getElementById('copyBtn');
        const generateClientReportBtn = document.getElementById('generateClientReportBtn');
        const generatePDFReportBtn = document.getElementById('generatePDFReportBtn');
        
        if (generateBtn) generateBtn.addEventListener('click', () => this.generateReport());
        if (saveToDbBtn) saveToDbBtn.addEventListener('click', () => this.saveReportToDatabase());
        if (clearFormBtn) clearFormBtn.addEventListener('click', () => this.clearForm());
        if (copyBtn) copyBtn.addEventListener('click', () => this.copyToClipboard());
        if (generateClientReportBtn) generateClientReportBtn.addEventListener('click', () => this.generateClientReport());
        if (generatePDFReportBtn) generatePDFReportBtn.addEventListener('click', () => this.generatePDFReport());
        
        this.setupAutoSave();
        
        this.loadFormData();
        
        this.updateProgress();
    },
    
    initScrollToTop() {
        const btn = document.getElementById('scrollToTopBtn');
        if (!btn) return;
        
        window.addEventListener('scroll', () => {
            btn.classList.toggle('visible', window.pageYOffset > 300);
        });
        
        btn.addEventListener('click', () => {
            this.playSound('click');
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
                this.playSound('click');
                modal.classList.add('hidden');
            });
        }
        
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                this.playSound('click');
                modal.classList.add('hidden');
            });
        }
        
        if (copyModalReportBtn) {
            copyModalReportBtn.addEventListener('click', () => {
                this.copyModalReport();
            });
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.playSound('click');
                    modal.classList.add('hidden');
                }
            });
        }
    },
    
    initTooltips() {
        let activeTooltip = null;
        
        function showTooltip(element, text) {
            if (activeTooltip) {
                activeTooltip.remove();
                activeTooltip = null;
            }
            
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = text;
            
            const rect = element.getBoundingClientRect();
            tooltip.style.position = 'fixed';
            tooltip.style.top = (rect.bottom + window.scrollY + 5) + 'px';
            tooltip.style.left = (rect.left + window.scrollX) + 'px';
            tooltip.style.zIndex = '10000';
            
            document.body.appendChild(tooltip);
            activeTooltip = tooltip;
            
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
    
    initEnhancedTooltips() {
        const motorcycleClassSelect = document.getElementById('motorcycle_class');
        if (motorcycleClassSelect) {
            motorcycleClassSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('class', motorcycleClassSelect.value);
            });
        }
        
        const gearboxTypeSelect = document.getElementById('gearbox_type');
        if (gearboxTypeSelect) {
            gearboxTypeSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('gearbox', gearboxTypeSelect.value);
            });
        }
        
        const originCountrySelect = document.getElementById('origin_country');
        if (originCountrySelect) {
            originCountrySelect.addEventListener('change', () => {
                this.showEnhancedTooltip('origin', originCountrySelect.value);
            });
        }
        
        const auctionTypeSelect = document.getElementById('auction_type');
        if (auctionTypeSelect) {
            auctionTypeSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('auction', auctionTypeSelect.value);
                this.toggleAuctionLotField(auctionTypeSelect.value);
            });
        }

        const legalStatusSelect = document.getElementById('legal_status');
        if (legalStatusSelect) {
            legalStatusSelect.addEventListener('change', () => {
                this.showEnhancedTooltip('legal_status', legalStatusSelect.value);
            });
        }
    },
    
    initInspectionsButtons() {
        const clearCompletedInspectionsBtn = document.getElementById('clearCompletedInspectionsBtn');
        
        if (clearCompletedInspectionsBtn) {
            clearCompletedInspectionsBtn.addEventListener('click', () => {
                this.playSound('click');
                this.clearCompletedInspections();
            });
        }
    },
    
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
        } else if (type === 'legal_status' && this.config.legalStatuses[value]) {
            const legalStatusInfo = this.config.legalStatuses[value];
            title = value;
            description = legalStatusInfo.description;
            examples = legalStatusInfo.examples.join(', ');
        } else {
            return;
        }
        
        this.showEnhancedToast(title, description, examples);
    },
    
    showEnhancedToast(title, description, examples = '') {
        const toastId = 'toast-' + Date.now();
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        if (this.state.activeToasts.size >= 3) {
            const oldestToastId = Array.from(this.state.activeToasts)[0];
            const oldestToast = document.getElementById(oldestToastId);
            if (oldestToast) {
                this.removeToast(oldestToast);
            }
        }
        
        const toast = document.createElement('div');
        toast.className = `toast toast-info toast-enhanced`;
        toast.id = toastId;
        toast.setAttribute('role', 'status');
        
        let toastContent = `
            <div class="toast-title">
                ${this.escapeHtml(title)}
                <button class="toast-close" onclick="app.removeToast(document.getElementById('${toastId}'))" aria-label="Закрыть">×</button>
            </div>
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
        this.state.activeToasts.add(toastId);
        
        this.playSound('notification');
        
        requestAnimationFrame(() => toast.classList.add('show'));
        
        const textLength = title.length + description.length + examples.length;
        const duration = textLength > 200 ? 8000 : 7000;
        
        setTimeout(() => {
            this.removeToast(toast);
        }, duration);
    },
    
    removeToast(toastElement) {
        if (!toastElement) return;
        
        toastElement.classList.remove('show');
        setTimeout(() => {
            if (toastElement.parentNode) {
                toastElement.remove();
            }
            this.state.activeToasts.delete(toastElement.id);
        }, 300);
    },
    
    toggleAuctionLotField(auctionType) {
        const auctionLotGroup = document.getElementById('auctionLotNumberGroup');
        if (!auctionLotGroup) return;
        
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
        
        const debouncedHandler = this.debounce(autoSaveHandler, 500);
        
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
            
            const brandEl = document.getElementById('brand');
            if (brandEl && data.brand) {
                brandEl.dispatchEvent(new Event('change'));
                
                setTimeout(() => {
                    const modelEl = document.getElementById('model');
                    if (modelEl && data.model) {
                        modelEl.value = data.model;
                        modelEl.dispatchEvent(new Event('change'));
                    }
                }, 0);
            }
            
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
            
            const insuranceSelect = document.getElementById('insurance');
            const insuranceDate = document.getElementById('insurance_date');
            const techInspectionSelect = document.getElementById('tech_inspection');
            const techInspectionDate = document.getElementById('tech_inspection_date');
            
            if (insuranceSelect && data.insurance) {
                insuranceSelect.value = data.insurance;
                insuranceSelect.dispatchEvent(new Event('change'));
            }
            
            if (insuranceDate && data.insurance_date) {
                insuranceDate.value = data.insurance_date;
            }
            
            if (techInspectionSelect && data.tech_inspection) {
                techInspectionSelect.value = data.tech_inspection;
                techInspectionSelect.dispatchEvent(new Event('change'));
            }
            
            if (techInspectionDate && data.tech_inspection_date) {
                techInspectionDate.value = data.tech_inspection_date;
            }
            
        } catch (e) {
            console.warn('Ошибка загрузки формы:', e);
        }
    },
    
    showSaveIndicator() {
        const indicator = document.getElementById('saveIndicator');
        if (indicator) {
            indicator.classList.add('visible');
            
            this.playSound('save');
            
            setTimeout(() => indicator.classList.remove('visible'), 2000);
        }
    },
    
    validateForm() {
        let isValid = true;
        let errorMessage = '';
        let firstErrorElement = null;
        
        const brandEl = document.getElementById('brand');
        const modelEl = document.getElementById('model');
        const yearEl = document.getElementById('year');
        
        if (!brandEl || !modelEl || !yearEl) return false;
        
        if (!brandEl.value) {
            isValid = false;
            brandEl.style.borderColor = 'var(--danger-color)';
            errorMessage = 'Выберите марку мотоцикла';
            if (!firstErrorElement) firstErrorElement = brandEl;
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
        
        const year = parseInt(yearEl.value, 10);
        if (yearEl.value && (isNaN(year) || year < 1990 || year > 2030)) {
            isValid = false;
            yearEl.style.borderColor = 'var(--danger-color)';
            errorMessage = 'Год выпуска должен быть между 1990 и 2030';
            if (!firstErrorElement) firstErrorElement = yearEl;
        }
        
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
            
            this.playSound('error');
            
            const generateBtn = document.getElementById('generateBtn');
            if (generateBtn) {
                generateBtn.classList.add('shake');
                setTimeout(() => generateBtn.classList.remove('shake'), 500);
            }
            
            if (firstErrorElement) {
                setTimeout(() => {
                    firstErrorElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'center' 
                    });
                    
                    firstErrorElement.classList.add('pulse');
                    setTimeout(() => firstErrorElement.classList.remove('pulse'), 1500);
                    
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
            if (copyBtn) {
                copyBtn.textContent = '📋 Копировать отчет для соцсетей';
                copyBtn.classList.remove('hidden');
            }
            
            this.calculateAndShowSavings(data);
            
            if (outputCard) outputCard.scrollIntoView({ behavior: 'smooth' });
            
            this.playSound('success');
            this.showToast('Отчет успешно сгенерирован!', 'success');
        } catch (e) {
            console.error('Ошибка генерации отчета:', e);
            this.playSound('error');
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
        
        if (data.origin_country) report += `🌍 Происхождение: ${data.origin_country}\n`;
        if (data.auction_type) report += `🏷️ Аукцион/поставка: ${data.auction_type}\n`;
        if (data.auction_lot_number) report += `📋 Номер лота/ссылка: ${data.auction_lot_number}\n`;
        
        if (data.motorcycle_class) report += `🏷️ Класс: ${data.motorcycle_class}\n`;
        
        if (data.legal_check) report += `📋 Юридическая проверка: ${data.legal_check}\n`;
        if (data.legal_status) report += `⚖️ Юридический статус: ${data.legal_status}\n`;
        
        if (data.insurance) {
            let insuranceText = data.insurance;
            if (data.insurance === 'Действующая до' && data.insurance_date) {
                insuranceText += ` ${new Date(data.insurance_date).toLocaleDateString('ru-RU')}`;
            }
            report += `🛡️ Страховка: ${insuranceText}\n`;
        }
        
        if (data.tech_inspection) {
            let techInspectionText = data.tech_inspection;
            if (data.tech_inspection === 'Действующий до' && data.tech_inspection_date) {
                techInspectionText += ` ${new Date(data.tech_inspection_date).toLocaleDateString('ru-RU')}`;
            }
            report += `🔧 Техосмотр: ${techInspectionText}\n`;
        }
        
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
            if (data.price) report += `💵 Цена продавца: ${this.formatMoneyDisplay(data.price)}\n`;
            if (data.objective_cost) report += `📊 Объективная стоимость: ${this.formatMoneyDisplay(data.objective_cost)}\n`;
            if (data.seller_discount) report += `🎁 Скидка с продавца: ${this.formatMoneyDisplay(data.seller_discount)}\n`;
            if (data.investment_cost) report += `🔧 Стоимость вложений: ${this.formatMoneyDisplay(data.investment_cost)}\n`;
        }
        
        report += `\n────────────────────────────\n`;
        report += `📞 Готовы найти свой идеальный мотоцикл?\n`;
        report += `Звоните: 8 950 005-05-08\n`;
        report += `Мы поможем сделать правильный выбор! ✅`;
        
        return report;
    },
    
    generateClientReport() {
        if (!this.validateForm()) return;
        
        try {
            const form = document.getElementById('diagnosticForm');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            const report = this.generateClientReportText(data);
            
            const output = document.getElementById('output');
            const outputCard = document.getElementById('outputCard');
            const copyBtn = document.getElementById('copyBtn');
            
            if (output) output.textContent = report;
            if (outputCard) outputCard.classList.remove('hidden');
            if (copyBtn) {
                copyBtn.textContent = '📋 Копировать отчет для клиента';
                copyBtn.classList.remove('hidden');
            }
            
            if (outputCard) outputCard.scrollIntoView({ behavior: 'smooth' });
            
            this.playSound('success');
            this.showToast('Отчет для клиента успешно сгенерирован!', 'success');
        } catch (e) {
            console.error('Ошибка генерации отчета для клиента:', e);
            this.playSound('error');
            this.showToast('Ошибка при создании отчета для клиента', 'warning');
        }
    },

    generateClientReportText(data) {
        const brand = data.brand === 'Другая марка' ? data.brand_custom : data.brand;
        const model = data.model === 'Другая модель' ? data.model_custom : data.model;
        
        let report = `🏍️ ДЕТАЛЬНЫЙ ОТЧЕТ О ПРОВЕРКЕ МОТОЦИКЛА\n`;
        report += `══════════════════════════════════════\n\n`;
        
        report += `📋 ОСНОВНЫЕ ДАННЫЕ:\n`;
        report += `────────────────────\n`;
        report += `• Марка: ${brand}\n`;
        report += `• Модель: ${model}\n`;
        if (data.year) report += `• Год выпуска: ${data.year}\n`;
        
        if (data.mileage_km) {
            const km = parseFloat(data.mileage_km);
            if (!isNaN(km)) {
                const miles = this.convertKmToMiles(km);
                report += `• Пробег: ${km} тыс. км (${miles} тыс. миль)\n`;
            }
        }
        
        if (data.vin) report += `• VIN: ${data.vin}\n`;
        if (data.engine_number) report += `• Двигатель: ${data.engine_number}\n`;
        if (data.license_plate) report += `• Гос. номер: ${data.license_plate}\n`;
        if (data.motorcycle_class) report += `• Класс: ${data.motorcycle_class}\n`;
        if (data.pts_type) report += `• Тип ПТС: ${data.pts_type}\n`;
        if (data.legal_status) report += `• Юридический статус: ${data.legal_status}\n`;
        
        if (data.vin_match) report += `• Совпадение VIN: ${data.vin_match}\n`;
        if (data.engine_number_match) report += `• Совпадение номера двигателя: ${data.engine_number_match}\n`;
        
        if (data.insurance) {
            let insuranceText = data.insurance;
            if (data.insurance === 'Действующая до' && data.insurance_date) {
                insuranceText += ` ${new Date(data.insurance_date).toLocaleDateString('ru-RU')}`;
            }
            report += `• Страховка: ${insuranceText}\n`;
        }
        
        if (data.tech_inspection) {
            let techInspectionText = data.tech_inspection;
            if (data.tech_inspection === 'Действующий до' && data.tech_inspection_date) {
                techInspectionText += ` ${new Date(data.tech_inspection_date).toLocaleDateString('ru-RU')}`;
            }
            report += `• Техосмотр: ${techInspectionText}\n`;
        }
        
        report += `\n🔧 РЕЗУЛЬТАТЫ ПРОВЕРКИ:\n`;
        report += `─────────────────────\n`;
        
        const inspectionFields = [
            { id: 'exterior', label: 'Внешний Вид Титульный', value: data.inspection_exterior },
            { id: 'geometry', label: 'Осмотр Фото Общий', value: data.inspection_geometry },
            { id: 'engine', label: 'Состояние ЛКП', value: data.inspection_engine },
            { id: 'consumables', label: 'Состояние Сиденья', value: data.inspection_consumables },
            { id: 'electrical', label: 'Осмотр Оптики', value: data.inspection_electrical },
            { id: 'suspension', label: 'Рама, Швы, Вторичная окраска', value: data.inspection_suspension },
            { id: 'fuel_system', label: 'Криминал, Вин номера, Номера Двигателя', value: data.inspection_fuel_system },
            { id: 'brake_system', label: 'Геометрия, Подрамника, руля, вилки…', value: data.inspection_brake_system },
            { id: 'cooling_system', label: 'Органы управления', value: data.inspection_cooling_system },
            { id: 'controls', label: 'Моторный Узел', value: data.inspection_controls },
            { id: 'additional_equipment', label: 'Топливная система', value: data.inspection_additional_equipment },
            { id: 'bodywork', label: 'Система охлаждения', value: data.inspection_bodywork },
            { id: 'electrical2', label: 'Электрооборудование', value: data.inspection_electrical2 },
            { id: 'brake_system2', label: 'Тормозная система', value: data.inspection_brake_system2 },
            { id: 'drive', label: 'Привод', value: data.inspection_drive },
            { id: 'tires', label: 'Резина', value: data.inspection_tires },
            { id: 'suspension_front_rear', label: 'Подвеска перед, зад', value: data.inspection_suspension_front_rear },
            { id: 'computer_diagnostics', label: 'Компьютерная Диагностика', value: data.inspection_computer_diagnostics },
            { id: 'additional_equipment2', label: 'Дополнительное оборудование', value: data.inspection_additional_equipment2 }
        ];
        
        inspectionFields.forEach(field => {
            if (field.value && field.value.trim() !== '') {
                report += `\n📌 ${field.label}:\n`;
                report += `   ${field.value}\n`;
            }
        });
        
        report += `\n💼 ЭКСПЕРТНОЕ ЗАКЛЮЧЕНИЕ:\n`;
        report += `───────────────────────\n`;
        if (data.key_finding) report += `• Ключевая находка: ${data.key_finding}\n`;
        if (data.expert_verdict) report += `• Вердикт эксперта: ${data.expert_verdict}\n`;
        if (data.decision) report += `• Рекомендация: ${data.decision}\n`;
        
        report += `\n💰 ФИНАНСОВАЯ ИНФОРМАЦИЯ:\n`;
        report += `────────────────────\n`;
        if (data.price) report += `• Цена продавца: ${this.formatMoneyDisplay(data.price)}\n`;
        if (data.objective_cost) report += `• Объективная стоимость: ${this.formatMoneyDisplay(data.objective_cost)}\n`;
        if (data.seller_discount) report += `• Скидка с продавца: ${this.formatMoneyDisplay(data.seller_discount)}\n`;
        if (data.investment_cost) report += `• Стоимость вложений: ${this.formatMoneyDisplay(data.investment_cost)}\n`;
        
        report += `\n📞 КОНТАКТЫ:\n`;
        report += `─────────────\n`;
        report += `Сергей Ландик\n`;
        report += `Телефон: 8 950 005-05-08\n`;
        report += `Сайт: motopodbor.ru\n\n`;
        
        report += `══════════════════════════════════════\n`;
        report += `Благодарим за доверие! 🏍️✅\n`;
        
        return report;
    },

    generatePDFReport() {
        if (!this.validateForm()) return;
        
        try {
            if (typeof window.jspdf === 'undefined') {
                this.showToast('Ошибка: Библиотека jsPDF не загружена', 'warning');
                return;
            }
            
            this.showToast('Генерация PDF отчета...', 'info');
            
            const form = document.getElementById('diagnosticForm');
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            const brand = data.brand === 'Другая марка' ? data.brand_custom : data.brand;
            const model = data.model === 'Другая модель' ? data.model_custom : data.model;
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 15;
            let yPosition = margin;
            const lineHeight = 7;
            const sectionSpacing = 10;
            
            const checkNewPage = (requiredHeight = lineHeight) => {
                if (yPosition + requiredHeight > pageHeight - margin) {
                    doc.addPage();
                    yPosition = margin;
                    return true;
                }
                return false;
            };
            
            const addText = (text, fontSize = 11, isBold = false, maxWidth = pageWidth - 2 * margin) => {
                if (!text) return;
                
                doc.setFontSize(fontSize);
                doc.setFont(undefined, isBold ? 'bold' : 'normal');
                
                const lines = doc.splitTextToSize(text, maxWidth);
                
                const textHeight = lines.length * (fontSize * 0.35 + 1);
                checkNewPage(textHeight);
                
                lines.forEach(line => {
                    if (yPosition + lineHeight > pageHeight - margin) {
                        doc.addPage();
                        yPosition = margin;
                    }
                    doc.text(line, margin, yPosition);
                    yPosition += lineHeight;
                });
                
                yPosition += 2;
            };
            
            const addSectionTitle = (title) => {
                checkNewPage(lineHeight * 2);
                doc.setFontSize(14);
                doc.setFont(undefined, 'bold');
                doc.setTextColor(99, 102, 241);
                doc.text(title, margin, yPosition);
                yPosition += lineHeight + 2;
                doc.setTextColor(0, 0, 0);
                doc.setFontSize(11);
                
                doc.setDrawColor(99, 102, 241);
                doc.setLineWidth(0.5);
                doc.line(margin, yPosition, pageWidth - margin, yPosition);
                yPosition += 4;
            };
            
            const addPhotos = (photos, sectionName) => {
                if (!photos || photos.length === 0) return;
                
                const photosPerRow = 2;
                const photoWidth = (pageWidth - 2 * margin - 10) / photosPerRow;
                const photoHeight = photoWidth * 0.75;
                
                checkNewPage(photoHeight + lineHeight * 2);
                
                addText(`📷 Фотографии: ${sectionName}`, 10, true);
                yPosition += 2;
                
                for (let i = 0; i < photos.length; i++) {
                    if (i % photosPerRow === 0 && i > 0) {
                        yPosition += photoHeight + 5;
                        checkNewPage(photoHeight + lineHeight);
                    }
                    
                    if (i % photosPerRow === 0 && i === 0) {
                        checkNewPage(photoHeight + lineHeight);
                    }
                    
                    const xPosition = margin + (i % photosPerRow) * (photoWidth + 5);
                    
                    try {
                        // Создаем временный элемент img для загрузки изображения
                        const img = new Image();
                        img.src = photos[i].data;
                        
                        doc.addImage(
                            img,
                            'JPEG',
                            xPosition,
                            yPosition,
                            photoWidth,
                            photoHeight
                        );
                        
                        doc.setFontSize(8);
                        doc.text(
                            `Фото ${i + 1}`,
                            xPosition + photoWidth / 2,
                            yPosition + photoHeight + 4,
                            { align: 'center' }
                        );
                        
                    } catch (error) {
                        console.warn(`Ошибка загрузки фото ${i + 1}:`, error);
                        doc.setFontSize(8);
                        doc.text(
                            `[Ошибка загрузки фото]`,
                            xPosition + photoWidth / 2,
                            yPosition + photoHeight / 2,
                            { align: 'center' }
                        );
                    }
                }
                
                if (photos.length > 0) {
                    yPosition += photoHeight + 15;
                }
            };
            
            // Заголовок отчета
            doc.setFontSize(20);
            doc.setFont(undefined, 'bold');
            doc.setTextColor(99, 102, 241);
            const title = `ОТЧЕТ О ДИАГНОСТИКЕ МОТОЦИКЛА`;
            const titleWidth = doc.getTextWidth(title);
            doc.text(title, (pageWidth - titleWidth) / 2, yPosition);
            yPosition += lineHeight * 2;
            
            doc.setFontSize(12);
            doc.setTextColor(100, 100, 100);
            doc.text('МотоДиагностика PRO - Профессиональная диагностика и подбор мотоциклов', margin, yPosition);
            yPosition += lineHeight * 2;
            
            doc.setTextColor(0, 0, 0);
            
            // Основные данные
            addSectionTitle('ОСНОВНЫЕ ДАННЫЕ');
            
            addText(`🏍️ Марка: ${brand || 'Не указана'}`, 11, true);
            addText(`📋 Модель: ${model || 'Не указана'}`);
            addText(`📅 Год выпуска: ${data.year || 'Не указан'}`);
            
            if (data.mileage_km) {
                addText(`🛣️ Пробег: ${data.mileage_km} тыс. км`);
            } else if (data.mileage_miles) {
                addText(`🛣️ Пробег: ${data.mileage_miles} тыс. миль`);
            }
            
            addText(`🔢 VIN: ${data.vin || 'Не указан'}`);
            addText(`⚙️ Двигатель: ${data.engine_number || 'Не указан'}`);
            addText(`🚗 Гос. номер: ${data.license_plate || 'Не указан'}`);
            addText(`🏷️ Класс: ${data.motorcycle_class || 'Не указан'}`);
            addText(`📦 Тип коробки: ${data.gearbox_type || 'Не указан'}`);
            addText(`🌍 Происхождение: ${data.origin_country || 'Не указано'}`);
            addText(`🏷️ Аукцион/поставка: ${data.auction_type || 'Не указано'}`);
            addText(`📄 Тип ПТС: ${data.pts_type || 'Не указан'}`);
            
            if (data.vin_match) addText(`✅ Совпадение VIN: ${data.vin_match}`);
            if (data.engine_number_match) addText(`✅ Совпадение номера двигателя: ${data.engine_number_match}`);
            
            if (data.insurance) {
                let insuranceText = data.insurance;
                if (data.insurance === 'Действующая до' && data.insurance_date) {
                    insuranceText += ` ${new Date(data.insurance_date).toLocaleDateString('ru-RU')}`;
                }
                addText(`🛡️ Страховка: ${insuranceText}`);
            }
            
            if (data.tech_inspection) {
                let techInspectionText = data.tech_inspection;
                if (data.tech_inspection === 'Действующий до' && data.tech_inspection_date) {
                    techInspectionText += ` ${new Date(data.tech_inspection_date).toLocaleDateString('ru-RU')}`;
                }
                addText(`🔧 Техосмотр: ${techInspectionText}`);
            }
            
            // Юридическая информация
            if (data.legal_check || data.legal_status || data.legal_comment) {
                addSectionTitle('ЮРИДИЧЕСКАЯ ИНФОРМАЦИЯ');
                
                if (data.legal_check) addText(`📋 Юридическая проверка: ${data.legal_check}`);
                if (data.legal_status) addText(`⚖️ Юридический статус: ${data.legal_status}`);
                if (data.legal_comment) addText(`📝 Комментарий: ${data.legal_comment}`);
            }
            
            // Результаты проверки
            const inspectionSections = [
                { id: 'exterior', label: 'Внешний Вид Титульный', value: data.inspection_exterior },
                { id: 'geometry', label: 'Осмотр Фото Общий', value: data.inspection_geometry },
                { id: 'engine', label: 'Состояние ЛКП', value: data.inspection_engine },
                { id: 'consumables', label: 'Состояние Сиденья', value: data.inspection_consumables },
                { id: 'electrical', label: 'Осмотр Оптики', value: data.inspection_electrical },
                { id: 'suspension', label: 'Рама, Швы, Вторичная окраска', value: data.inspection_suspension },
                { id: 'fuel_system', label: 'Криминал, Вин номера, Номера Двигателя', value: data.inspection_fuel_system },
                { id: 'brake_system', label: 'Геометрия, Подрамника, руля, вилки…', value: data.inspection_brake_system },
                { id: 'cooling_system', label: 'Органы управления', value: data.inspection_cooling_system },
                { id: 'controls', label: 'Моторный Узел', value: data.inspection_controls },
                { id: 'additional_equipment', label: 'Топливная система', value: data.inspection_additional_equipment },
                { id: 'bodywork', label: 'Система охлаждения', value: data.inspection_bodywork },
                { id: 'electrical2', label: 'Электрооборудование', value: data.inspection_electrical2 },
                { id: 'brake_system2', label: 'Тормозная система', value: data.inspection_brake_system2 },
                { id: 'drive', label: 'Привод', value: data.inspection_drive },
                { id: 'tires', label: 'Резина', value: data.inspection_tires },
                { id: 'suspension_front_rear', label: 'Подвеска перед, зад', value: data.inspection_suspension_front_rear },
                { id: 'computer_diagnostics', label: 'Компьютерная Диагностика', value: data.inspection_computer_diagnostics },
                { id: 'additional_equipment2', label: 'Дополнительное оборудование', value: data.inspection_additional_equipment2 }
            ];
            
            let hasInspectionData = false;
            inspectionSections.forEach(section => {
                const hasText = section.value && section.value.trim() !== '';
                const hasPhotos = this.state.currentPhotos[section.id] && this.state.currentPhotos[section.id].length > 0;
                
                if (hasText || hasPhotos) {
                    if (!hasInspectionData) {
                        addSectionTitle('РЕЗУЛЬТАТЫ ПРОВЕРКИ');
                        hasInspectionData = true;
                    }
                    
                    addText(`📌 ${section.label}:`, 11, true);
                    if (hasText) {
                        addText(section.value);
                    }
                    
                    if (hasPhotos) {
                        addPhotos(this.state.currentPhotos[section.id], section.label);
                    }
                    
                    yPosition += 5;
                }
            });
            
            // Финансовая информация
            if (data.price || data.objective_cost || data.seller_discount || data.investment_cost) {
                addSectionTitle('ФИНАНСОВАЯ ИНФОРМАЦИЯ');
                
                if (data.price) addText(`💵 Цена продавца: ${this.formatMoneyDisplay(data.price)}`);
                if (data.objective_cost) addText(`📊 Объективная стоимость: ${this.formatMoneyDisplay(data.objective_cost)}`);
                if (data.seller_discount) addText(`🎁 Скидка с продавца: ${this.formatMoneyDisplay(data.seller_discount)}`);
                if (data.investment_cost) addText(`🔧 Стоимость вложений: ${this.formatMoneyDisplay(data.investment_cost)}`);
            }
            
            // Экспертное заключение
            if (data.key_finding || data.expert_verdict || data.decision) {
                addSectionTitle('ЭКСПЕРТНОЕ ЗАКЛЮЧЕНИЕ');
                
                if (data.key_finding) addText(`🔑 Ключевая находка: ${data.key_finding}`);
                if (data.expert_verdict) addText(`👨‍💼 Вердикт эксперта: ${data.expert_verdict}`);
                if (data.decision) addText(`🤔 Решение: ${data.decision}`);
            }
            
            // Контактная информация
            addSectionTitle('КОНТАКТНАЯ ИНФОРМАЦИЯ');
            addText(`Сергей Ландик`, 11, true);
            addText(`Телефон: 8 950 005-05-08`);
            addText(`Сайт: motopodbor.ru`);
            addText(`Отчет сгенерирован: ${new Date().toLocaleDateString('ru-RU')}`);
            
            // Нумерация страниц
            const totalPages = doc.internal.getNumberOfPages();
            for (let i = 1; i <= totalPages; i++) {
                doc.setPage(i);
                doc.setFontSize(8);
                doc.setTextColor(100, 100, 100);
                doc.text(
                    `Страница ${i} из ${totalPages}`,
                    pageWidth - margin - 20,
                    pageHeight - 10
                );
                doc.setTextColor(0, 0, 0);
            }
            
            // Сохранение PDF
            const filename = `Отчет_${(brand || 'мотоцикл').replace(/[^\w]/g, '_')}_${(model || '').replace(/[^\w]/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
            doc.save(filename);
            
            this.playSound('success');
            this.showToast('PDF отчет успешно сгенерирован и скачан!', 'success');
            
        } catch (e) {
            console.error('Ошибка генерации PDF отчета:', e);
            this.playSound('error');
            this.showToast('Ошибка при создании PDF отчета', 'warning');
        }
    },
    
    formatMoneyDisplay(value) {
        if (!value) return 'Не указана';
        
        if (typeof value === 'string' && (value.includes('тыс') || value.includes('млн'))) {
            return value;
        }
        
        const numValue = this.parseMoneyValue(value);
        
        if (numValue >= 1000000) {
            return (numValue / 1000000).toFixed(1).replace('.0', '') + ' млн руб';
        } else if (numValue >= 1000) {
            return (numValue / 1000).toFixed(0) + ' тыс. руб';
        } else {
            return numValue + ' руб';
        }
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
                savingsAlert.textContent = `💵 Общая экономия для клиента: ${this.formatMoneyDisplay(savings.toString())}`;
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
        
        let str = value.toString().toLowerCase().replace(/\s/g, '').replace(',', '.');
        
        let num = parseFloat(str);
        if (isNaN(num)) return 0;
        
        if (str.includes('млн')) {
            return num * 1000000;
        } else if (str.includes('тыс') || str.includes('т.р.') || str.includes('к')) {
            return num * 1000;
        } else if (str.includes('руб')) {
            return num;
        } else {
            if (num > 100000) {
                return num;
            } else {
                return num * 1000;
            }
        }
    },
    
    formatMoney(amount) {
        if (amount >= 1000000) {
            return (amount / 1000000).toFixed(1).replace('.0', '') + ' млн';
        } else if (amount >= 1000) {
            return (amount / 1000).toFixed(0) + ' тыс.';
        } else {
            return amount + ' руб';
        }
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
                generated_text: document.getElementById('output')?.textContent || '',
                photos: JSON.parse(JSON.stringify(this.state.currentPhotos))
            };
            
            this.state.reportsDatabase.push(report);
            localStorage.setItem('motodiag_reports', JSON.stringify(this.state.reportsDatabase));
            
            if (data.decision === '📅 Запланировать проверку') {
                this.saveInspectionToDatabase(data, report.id);
            }
            
            this.playSound('success');
            this.showToast('Отчет успешно сохранен в базу данных!', 'success');
            this.loadReportsList();
            this.updateStatistics();
        } catch (e) {
            console.error('Ошибка сохранения отчета:', e);
            this.playSound('error');
            this.showToast('Ошибка при сохранении отчета', 'warning');
        }
    },
    
    saveInspectionToDatabase(data, reportId) {
        try {
            const inspection = {
                id: Date.now().toString(),
                reportId: reportId,
                timestamp: new Date().toISOString(),
                brand: data.brand === 'Другая марка' ? data.brand_custom : data.brand,
                model: data.model === 'Другая модель' ? data.model_custom : data.model,
                year: data.year,
                date: data.inspection_date,
                time: data.inspection_time,
                address: data.inspection_address,
                customer_phone: data.customer_phone,
                seller_phone: data.seller_phone,
                notes: data.inspection_notes,
                status: 'planned',
                reminded: false
            };
            
            this.state.inspectionsDatabase.push(inspection);
            localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
            
            this.playSound('success');
            this.showToast('Проверка успешно запланирована!', 'success');
            this.loadInspectionsList();
        } catch (e) {
            console.error('Ошибка сохранения проверки:', e);
            this.playSound('error');
            this.showToast('Ошибка при сохранении проверки', 'warning');
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
        
        const brandSelect = document.getElementById('brand');
        if (brandSelect) {
            brandSelect.value = '';
            brandSelect.dispatchEvent(new Event('change'));
        }
        
        this.clearAllPhotos();
        
        this.state.editingReportId = null;
        this.updateProgress();
        
        this.playSound('success');
        this.showToast('Форма очищена', 'success');
    },
    
    copyToClipboard() {
        try {
            const text = document.getElementById('output')?.textContent || '';
            if (!text) {
                this.playSound('error');
                this.showToast('Нет текста для копирования', 'warning');
                return;
            }
            
            navigator.clipboard.writeText(text).then(() => {
                this.playSound('success');
                this.showToast('Отчет скопирован в буфер обмена!', 'success');
            }).catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.playSound('success');
                this.showToast('Отчет скопирован в буфер обмена!', 'success');
            });
        } catch (e) {
            console.error('Ошибка копирования:', e);
            this.playSound('error');
            this.showToast('Ошибка при копировании', 'warning');
        }
    },
    
    copyModalReport() {
        try {
            const text = document.getElementById('modalOutput')?.textContent || '';
            if (!text) {
                this.playSound('error');
                this.showToast('Нет текста для копирования', 'warning');
                return;
            }
            
            navigator.clipboard.writeText(text).then(() => {
                this.playSound('success');
                this.showToast('Отчет скопирован в буфер обмена для соцсетей!', 'success');
            }).catch(() => {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
                this.playSound('success');
                this.showToast('Отчет скопирован в буфер обмена для соцсетей!', 'success');
            });
        } catch (e) {
            console.error('Ошибка копирования:', e);
            this.playSound('error');
            this.showToast('Ошибка при копировании', 'warning');
        }
    },
    
    showToast(message, type = 'info') {
        const toastId = 'toast-' + Date.now();
        const container = document.getElementById('toastContainer');
        if (!container) return;
        
        if (this.state.activeToasts.size >= 3) {
            const oldestToastId = Array.from(this.state.activeToasts)[0];
            const oldestToast = document.getElementById(oldestToastId);
            if (oldestToast) {
                this.removeToast(oldestToast);
            }
        }
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.id = toastId;
        toast.setAttribute('role', 'status');
        
        toast.innerHTML = `
            ${message}
            <button class="toast-close" onclick="app.removeToast(document.getElementById('${toastId}'))" aria-label="Закрыть">×</button>
        `;
        
        container.appendChild(toast);
        this.state.activeToasts.add(toastId);
        
        switch(type) {
            case 'success':
                this.playSound('success');
                break;
            case 'warning':
                this.playSound('warning');
                break;
            case 'error':
                this.playSound('error');
                break;
            default:
                this.playSound('notification');
        }
        
        requestAnimationFrame(() => toast.classList.add('show'));
        
        setTimeout(() => {
            this.removeToast(toast);
        }, 4000);
    },
    
    showError(message) {
        this.showToast(message, 'warning');
    },
    
    escapeHtml(str) {
        return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
    },
    
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
        
        reportsList.innerHTML = filtered.map(report => {
            const hasPhotos = report.photos && Object.keys(report.photos).some(section => 
                report.photos[section] && report.photos[section].length > 0
            );
            
            return `
            <div class="report-item">
                <div class="report-header">
                    <div class="report-title">${this.escapeHtml(report.brand)} ${this.escapeHtml(report.model)} (${this.escapeHtml(report.year)}) ${hasPhotos ? '📷' : ''}</div>
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
                    <div>Юридический статус: ${this.escapeHtml(report.legal_status || 'Не указан')}</div>
                    <div>Решение: ${this.escapeHtml(report.decision || 'Не указано')}</div>
                </div>
            </div>
        `}).join('');
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
        
        this.playSound('click');
    },
    
    editReport(reportId) {
        const report = this.state.reportsDatabase.find(r => r.id === reportId);
        if (!report) return;
        
        this.state.editingReportId = reportId;
        
        Object.keys(report).forEach(key => {
            const el = document.getElementById(key);
            if (el && report[key] !== undefined && report[key] !== null) {
                el.value = report[key];
            }
        });
        
        if (report.photos) {
            this.state.currentPhotos = JSON.parse(JSON.stringify(report.photos));
            this.saveCurrentPhotos();
            this.loadPhotoPreviews();
        }
        
        const brandSelect = document.getElementById('brand');
        if (brandSelect && report.brand) {
            brandSelect.value = report.brand;
            brandSelect.dispatchEvent(new Event('change'));
            
            setTimeout(() => {
                const modelSelect = document.getElementById('model');
                if (modelSelect && report.model) {
                    modelSelect.value = report.model;
                    modelSelect.dispatchEvent(new Event('change'));
                }
            }, 0);
        }
        
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
        
        const reportTab = document.querySelector('.nav-tab[data-tab="report"]');
        if (reportTab) reportTab.click();
        
        this.playSound('click');
        this.showToast(`Редактирование отчета: ${report.brand} ${report.model}`, 'info');
    },
    
    deleteReport(reportId) {
        if (!confirm('Вы уверены, что хотите удалить этот отчет?')) return;
        
        this.state.reportsDatabase = this.state.reportsDatabase.filter(r => r.id !== reportId);
        localStorage.setItem('motodiag_reports', JSON.stringify(this.state.reportsDatabase));
        
        this.state.inspectionsDatabase = this.state.inspectionsDatabase.filter(i => i.reportId !== reportId);
        localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
        
        this.loadReportsList();
        this.loadInspectionsList();
        this.updateStatistics();
        
        this.playSound('success');
        this.showToast('Отчет успешно удален', 'success');
    },
    
    exportAllData() {
        try {
            const allData = {
                version: '2.6.0',
                exportDate: new Date().toISOString(),
                reports: this.state.reportsDatabase,
                inspections: this.state.inspectionsDatabase,
                currentPhotos: this.state.currentPhotos,
                settings: {
                    theme: localStorage.getItem('motodiag_theme'),
                    soundEnabled: localStorage.getItem('motodiag_sound_enabled'),
                    autoSave: localStorage.getItem('motodiag_auto_save'),
                    inspectionNotifications: localStorage.getItem('motodiag_inspection_notifications'),
                    reminderTime: localStorage.getItem('motodiag_reminder_time')
                },
                formData: localStorage.getItem('motodiag_form_data')
            };

            const dataStr = JSON.stringify(allData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            
            const link = document.createElement('a');
            link.href = URL.createObjectURL(dataBlob);
            link.download = `motodiag_all_data_${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            
            this.playSound('success');
            this.showToast('Все данные успешно экспортированы', 'success');
        } catch (e) {
            console.error('Ошибка экспорта всех данных:', e);
            this.playSound('error');
            this.showToast('Ошибка при экспорте данных', 'warning');
        }
    },
    
    importAllData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = e => {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = event => {
                try {
                    const importedData = JSON.parse(event.target.result);
                    
                    if (!importedData.reports || !importedData.inspections) {
                        throw new Error('Некорректный формат файла');
                    }

                    if (!confirm('Вы уверены, что хотите импортировать все данные? Текущие данные будут потеряны.')) {
                        return;
                    }

                    this.state.reportsDatabase = importedData.reports;
                    this.state.inspectionsDatabase = importedData.inspections;

                    if (importedData.currentPhotos) {
                        this.state.currentPhotos = importedData.currentPhotos;
                    }

                    localStorage.setItem('motodiag_reports', JSON.stringify(this.state.reportsDatabase));
                    localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
                    this.saveCurrentPhotos();

                    if (importedData.settings) {
                        if (importedData.settings.theme) {
                            localStorage.setItem('motodiag_theme', importedData.settings.theme);
                        }
                        if (importedData.settings.soundEnabled) {
                            localStorage.setItem('motodiag_sound_enabled', importedData.settings.soundEnabled);
                        }
                        if (importedData.settings.autoSave) {
                            localStorage.setItem('motodiag_auto_save', importedData.settings.autoSave);
                        }
                        if (importedData.settings.inspectionNotifications) {
                            localStorage.setItem('motodiag_inspection_notifications', importedData.settings.inspectionNotifications);
                        }
                        if (importedData.settings.reminderTime) {
                            localStorage.setItem('motodiag_reminder_time', importedData.settings.reminderTime);
                        }
                    }

                    if (importedData.formData) {
                        localStorage.setItem('motodiag_form_data', importedData.formData);
                    }

                    const theme = importedData.settings?.theme || 'light';
                    document.body.setAttribute('data-theme', theme);

                    const darkThemeCheckbox = document.getElementById('darkTheme');
                    if (darkThemeCheckbox) {
                        darkThemeCheckbox.checked = theme === 'dark';
                    }

                    const soundCheckbox = document.getElementById('soundNotifications');
                    if (soundCheckbox && importedData.settings) {
                        soundCheckbox.checked = importedData.settings.soundEnabled === 'true';
                        this.state.soundEnabled = importedData.settings.soundEnabled === 'true';
                    }

                    const autoSaveCheckbox = document.getElementById('autoSave');
                    if (autoSaveCheckbox && importedData.settings) {
                        autoSaveCheckbox.checked = importedData.settings.autoSave === 'true';
                    }

                    const inspectionNotificationsCheckbox = document.getElementById('inspectionNotifications');
                    if (inspectionNotificationsCheckbox && importedData.settings) {
                        inspectionNotificationsCheckbox.checked = importedData.settings.inspectionNotifications === 'true';
                    }

                    const reminderTimeInput = document.getElementById('reminderTime');
                    if (reminderTimeInput && importedData.settings?.reminderTime) {
                        reminderTimeInput.value = importedData.settings.reminderTime;
                    }

                    this.loadReportsList();
                    this.loadInspectionsList();
                    this.updateStatistics();
                    this.loadFormData();
                    this.loadPhotoPreviews();

                    this.playSound('success');
                    this.showToast('Все данные успешно импортированы', 'success');

                } catch (error) {
                    console.error('Ошибка импорта всех данных:', error);
                    this.playSound('error');
                    this.showToast('Ошибка при импорте данных', 'warning');
                }
            };
            reader.readAsText(file);
        };
        
        input.click();
    },
    
    updateStatistics(period = 'week') {
        const now = new Date();
        let startDate = new Date(now - 7 * 24 * 60 * 60 * 1000);
        
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
        const activeInspections = this.state.inspectionsDatabase.filter(i => 
            i.status === 'planned' && new Date(i.date + 'T' + i.time) > new Date()
        ).length;
        const overdueInspections = this.state.inspectionsDatabase.filter(i => 
            i.status === 'planned' && new Date(i.date + 'T' + i.time) < new Date()
        ).length;
        
        const totalReportsEl = document.getElementById('totalReports');
        const successfulDealsEl = document.getElementById('successfulDeals');
        const avgSavingsEl = document.getElementById('avgSavings');
        const popularBrandEl = document.getElementById('popularBrand');
        const plannedInspectionsEl = document.getElementById('plannedInspections');
        const completedInspectionsEl = document.getElementById('completedInspections');
        const activeInspectionsEl = document.getElementById('activeInspections');
        const overdueInspectionsEl = document.getElementById('overdueInspections');
        
        if (totalReportsEl) totalReportsEl.textContent = totalReports;
        if (successfulDealsEl) successfulDealsEl.textContent = purchased;
        if (avgSavingsEl) avgSavingsEl.textContent = this.formatMoney(Math.round(avgSavings));
        if (popularBrandEl) popularBrandEl.textContent = popularBrand;
        if (plannedInspectionsEl) plannedInspectionsEl.textContent = plannedInspections;
        if (completedInspectionsEl) completedInspectionsEl.textContent = completedInspections;
        if (activeInspectionsEl) activeInspectionsEl.textContent = activeInspections;
        if (overdueInspectionsEl) overdueInspectionsEl.textContent = overdueInspections;
    },
    
    loadInspectionsList() {
        const inspectionsList = document.getElementById('inspectionsList');
        if (!inspectionsList) return;
        
        const searchValue = (document.getElementById('searchInspections')?.value || '').toLowerCase();
        
        if (this.state.inspectionsDatabase.length === 0) {
            inspectionsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Нет запланированных проверок</div>';
            return;
        }
        
        const filtered = this.state.inspectionsDatabase.filter(inspection => {
            if (!searchValue) return true;
            
            return (
                inspection.brand?.toLowerCase().includes(searchValue) ||
                inspection.model?.toLowerCase().includes(searchValue) ||
                inspection.address?.toLowerCase().includes(searchValue) ||
                inspection.customer_phone?.includes(searchValue)
            );
        }).reverse();
        
        if (filtered.length === 0) {
            inspectionsList.innerHTML = '<div class="text-center" style="padding: 20px; color: var(--text-light);">Проверки не найдены</div>';
            return;
        }
        
        inspectionsList.innerHTML = filtered.map(inspection => {
            const inspectionDateTime = new Date(inspection.date + 'T' + inspection.time);
            const now = new Date();
            const isOverdue = inspectionDateTime < now && inspection.status === 'planned';
            const isToday = inspectionDateTime.toDateString() === now.toDateString();
            
            return `
                <div class="inspection-item ${inspection.status === 'completed' ? 'completed' : ''}">
                    <div class="inspection-header">
                        <div class="inspection-title">${this.escapeHtml(inspection.brand)} ${this.escapeHtml(inspection.model)} (${this.escapeHtml(inspection.year)})</div>
                        <div class="inspection-date">
                            ${isToday ? '🕐 Сегодня' : inspectionDateTime.toLocaleDateString('ru-RU')} ${inspection.time}
                            ${isOverdue ? ' ⚠️' : ''}
                        </div>
                    </div>
                    <div class="inspection-details">
                        <div><strong>Адрес:</strong> ${this.escapeHtml(inspection.address)}</div>
                        <div><strong>Телефон заказчика:</strong> ${this.escapeHtml(inspection.customer_phone)}</div>
                        ${inspection.seller_phone ? `<div><strong>Телефон продавца:</strong> ${this.escapeHtml(inspection.seller_phone)}</div>` : ''}
                        ${inspection.notes ? `<div><strong>Заметки:</strong> ${this.escapeHtml(inspection.notes)}</div>` : ''}
                        <div><strong>Статус:</strong> ${inspection.status === 'completed' ? '✅ Завершена' : '🕐 Запланирована'}</div>
                    </div>
                    <div class="inspection-actions">
                        ${inspection.status !== 'completed' ? `
                            <button class="action-btn" style="background: var(--success-color); color: white;" onclick="app.completeInspection('${inspection.id}')" aria-label="Отметить как выполненную">✅</button>
                            <button class="action-btn" style="background: var(--warning-color); color: white;" onclick="app.editInspection('${inspection.id}')" aria-label="Редактировать проверку">✏️</button>
                        ` : ''}
                        <button class="action-btn" style="background: var(--primary-color); color: white;" onclick="app.viewReport('${inspection.reportId}')" aria-label="Просмотреть отчет">👁️</button>
                        <button class="action-btn" style="background: var(--danger-color); color: white;" onclick="app.deleteInspection('${inspection.id}')" aria-label="Удалить проверку">🗑️</button>
                    </div>
                </div>
            `;
        }).join('');
    },
    
    completeInspection(inspectionId) {
        const inspection = this.state.inspectionsDatabase.find(i => i.id === inspectionId);
        if (inspection) {
            inspection.status = 'completed';
            localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
            this.loadInspectionsList();
            this.updateStatistics();
            
            this.playSound('completion');
            this.showToast('Проверка отмечена как выполненная', 'success');
        }
    },
    
    editInspection(inspectionId) {
        const inspection = this.state.inspectionsDatabase.find(i => i.id === inspectionId);
        if (!inspection) return;
        
        this.editReport(inspection.reportId);
    },
    
    deleteInspection(inspectionId) {
        if (!confirm('Вы уверены, что хотите удалить эту проверку?')) return;
        
        this.state.inspectionsDatabase = this.state.inspectionsDatabase.filter(i => i.id !== inspectionId);
        localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
        this.loadInspectionsList();
        this.updateStatistics();
        
        this.playSound('success');
        this.showToast('Проверка удалена', 'success');
    },
    
    clearCompletedInspections() {
        if (!confirm('Вы уверены, что хотите удалить все завершенные проверки?')) return;
        
        const completedCount = this.state.inspectionsDatabase.filter(i => i.status === 'completed').length;
        this.state.inspectionsDatabase = this.state.inspectionsDatabase.filter(i => i.status !== 'completed');
        localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
        this.loadInspectionsList();
        this.updateStatistics();
        
        this.playSound('success');
        this.showToast(`Удалено ${completedCount} завершенных проверок`, 'success');
    },
    
    checkInspectionReminders() {
        const reminderTime = parseInt(document.getElementById('reminderTime')?.value || 2, 10);
        const now = new Date();
        const reminderMs = reminderTime * 60 * 60 * 1000;
        
        this.state.inspectionsDatabase.forEach(inspection => {
            if (inspection.status !== 'planned' || inspection.reminded) return;
            
            const inspectionDateTime = new Date(inspection.date + 'T' + inspection.time);
            const timeUntilInspection = inspectionDateTime - now;
            
            if (timeUntilInspection > 0 && timeUntilInspection <= reminderMs) {
                this.showToast(
                    `Напоминание: проверка ${inspection.brand} ${inspection.model} запланирована на ${inspection.date} ${inspection.time}`,
                    'info'
                );
                
                this.playSound('warning');
                
                inspection.reminded = true;
                localStorage.setItem('motodiag_inspections', JSON.stringify(this.state.inspectionsDatabase));
            }
        });
        
        setTimeout(() => this.checkInspectionReminders(), 30 * 60 * 1000);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    try {
        app.init();
        
        const searchReports = document.getElementById('searchReports');
        if (searchReports) {
            searchReports.addEventListener('input', () => app.loadReportsList());
        }
        
        const searchInspections = document.getElementById('searchInspections');
        if (searchInspections) {
            searchInspections.addEventListener('input', () => app.loadInspectionsList());
        }
        
        document.querySelectorAll('.grid-btn[data-period]').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.grid-btn[data-period]').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                app.updateStatistics(this.getAttribute('data-period'));
                
                app.playSound('click');
            });
        });
        
        const generateStatsBtn = document.getElementById('generateStatsBtn');
        if (generateStatsBtn) {
            generateStatsBtn.addEventListener('click', () => {
                const statsOutput = document.getElementById('statsOutput');
                const copyStatsBtn = document.getElementById('copyStatsBtn');
                
                if (statsOutput) {
                    const now = new Date();
                    statsOutput.textContent = `📊 Статистика МотоДиагностика PRO\n\n` +
                        `📅 Период: ${now.toLocaleDateString('ru-RU')}\n` +
                        `🏍️ Всего отчетов: ${app.state.reportsDatabase.length}\n` +
                        `✅ Успешных сделок: ${app.state.reportsDatabase.filter(r => r.decision === '✅ Куплен').length}\n` +
                        `📋 Запланированных проверок: ${app.state.inspectionsDatabase.filter(i => i.status === 'planned').length}\n\n` +
                        `📞 Сергей Ландик 8 950 005-05-08\n` +
                        `🌐 Сайт: motopodbor.ru`;
                    
                    statsOutput.classList.remove('hidden');
                }
                
                if (copyStatsBtn) {
                    copyStatsBtn.classList.remove('hidden');
                    copyStatsBtn.onclick = () => {
                        navigator.clipboard.writeText(statsOutput.textContent).then(() => {
                            app.playSound('success');
                            app.showToast('Статистика скопирована в буфер обмена!', 'success');
                        });
                    };
                }
                
                app.playSound('success');
            });
        }
        
    } catch (e) {
        console.error('Критическая ошибка инициализации:', e);
        alert('Ошибка загрузки приложения. Попробуйте обновить страницу.');
    }
});
