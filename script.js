// Константы и типы
const STORAGE_KEYS = {
    reports: 'motodiag_reports',
    inspections: 'motodiag_inspections',
    form: 'motodiag_form',
    settings: 'motodiag_settings',
};

const MODELS_BY_BRAND = {
    Yamaha: ['MT-07', 'MT-09', 'YZF-R1', 'YZF-R6', 'YZF-R3', 'XMAX', 'TMAX', 'Tracer 9', 'XSR900'],
    Honda: ['CBR1000RR', 'CBR650R', 'CB500F', 'Africa Twin', 'Rebel 500', 'Gold Wing', 'NC750X'],
    Kawasaki: ['Ninja ZX-10R', 'Ninja 650', 'Z900', 'Versys 650', 'Vulcan S', 'KLX230'],
    Suzuki: ['GSX-R1000', 'GSX-R750', 'GSX-S1000', 'V-Strom 650', 'SV650', 'Hayabusa'],
    BMW: ['S1000RR', 'R1250GS', 'F900R', 'R18', 'C400X'],
    KTM: ['1290 Super Duke R', '790 Duke', '390 Duke', '690 Enduro'],
    Ducati: ['Panigale V4', 'Monster', 'Scrambler', 'Multistrada', 'Streetfighter'],
    Triumph: ['Street Triple', 'Speed Triple', 'Tiger 900', 'Bonneville', 'Rocket 3'],
    'Harley-Davidson': ['Street Glide', 'Sportster', 'Fat Boy', 'Softail', 'Pan America'],
    'Другая марка': ['Другая модель'],
};

const MOTO_CLASSES = [
    'Классический',
    'Нейкед',
    'Скрэмблер',
    'Спортбайк',
    'Туристический',
    'Гипербайк',
    'Турэндуро',
    'Круизер',
    'Мускулбайк',
    'Боббер',
    'Кафе-рейсер',
    'Мотоцикл с коляской',
    'Кастом',
    'Чоппер',
    'Мини-байк',
    'Трайк',
    'Макси-скутер',
    'Кроссовый',
    'Эндуро',
    'Мотард',
    'Супермото',
    'Триалбайк',
    'Питбайк',
    'Мопед',
    'Скутер',
    'Скутеретта',
];

// Состояние приложения
let state = {
    theme: 'light',
    activeTab: 'report',
    form: createEmptyForm(),
    reports: [],
    inspections: [],
    generatedReport: '',
    savingsText: '',
    toasts: [],
    autoSave: true,
    vibration: true,
    inspectionNotifications: true,
    reminderHours: 2,
    showScrollTop: false,
    searchReports: '',
    searchInspections: '',
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadInitialData();
    renderApp();
});

// Инициализация DOM элементов
function initializeApp() {
    // Заполняем выпадающие списки
    populateBrandSelect();
    populateMotoClassSelect();
    
    // Устанавливаем текущий год как максимальный для поля года
    const yearInput = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearInput.max = currentYear + 1;
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Переключение темы
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-settings').addEventListener('click', toggleTheme);
    
    // Навигация по вкладкам
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            setActiveTab(tabId);
        });
    });
    
    // Обработчики формы отчета
    document.getElementById('report-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleGenerateReport();
    });
    
    document.getElementById('brand').addEventListener('change', handleBrandChange);
    document.getElementById('model').addEventListener('change', handleModelChange);
    document.getElementById('decision').addEventListener('change', handleDecisionChange);
    
    // Кнопки действий
    document.getElementById('save-report').addEventListener('click', handleSaveReport);
    document.getElementById('print-report').addEventListener('click', handlePrintClientReport);
    document.getElementById('clear-form').addEventListener('click', handleClearForm);
    document.getElementById('copy-report').addEventListener('click', handleCopyReport);
    
    // База отчетов
    document.getElementById('search-reports').addEventListener('input', handleSearchReports);
    document.getElementById('export-reports').addEventListener('click', handleExportReports);
    document.getElementById('import-reports').addEventListener('click', handleImportReports);
    
    // Настройки
    document.getElementById('auto-save-toggle').addEventListener('click', toggleAutoSave);
    document.getElementById('export-settings').addEventListener('click', handleExportSettings);
    document.getElementById('import-settings').addEventListener('click', handleImportSettings);
    document.getElementById('clear-all-data').addEventListener('click', handleClearAllData);
    
    // Кнопка наверх
    document.getElementById('scroll-top').addEventListener('click', scrollToTop);
    
    // Отслеживание прокрутки для кнопки наверх
    window.addEventListener('scroll', handleScroll);
    
    // Автосохранение формы
    setupFormAutoSave();
}

// Загрузка начальных данных
function loadInitialData() {
    loadFromLocalStorage();
    updateProgressBar();
}

// Рендеринг приложения
function renderApp() {
    renderTheme();
    renderTabs();
    renderForm();
    renderReportsList();
    renderToasts();
    renderScrollTopButton();
}

// Утилиты
function createEmptyForm() {
    return {
        brand: '',
        brandCustom: '',
        model: '',
        modelCustom: '',
        year: '',
        mileage: '',
        vin: '',
        licensePlate: '',
        motoClass: '',
        gearboxType: '',
        engineVolume: '',
        powerHp: '',
        originCountry: '',
        auctionType: '',
        legalCheckedVia: '',
        legalStatus: '',
        legalComment: '',
        price: '',
        objectivePrice: '',
        sellerDiscount: '',
        investments: '',
        profitabilityComment: '',
        keyFinding: '',
        expertVerdict: '',
        decision: '',
        inspectionDate: '',
        inspectionTime: '',
        inspectionAddress: '',
        customerPhone: '',
        sellerPhone: '',
        inspectionNotes: '',
    };
}

function parseMoney(value) {
    if (!value) return 0;
    const clean = value
        .toString()
        .replace(/\s/g, '')
        .replace(/[^0-9,.-]/g, '')
        .replace(',', '.');
    const num = parseFloat(clean);
    return Number.isNaN(num) ? 0 : num;
}

function formatMoney(amount) {
    try {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            maximumFractionDigits: 0,
        }).format(amount);
    } catch {
        return amount.toFixed(0) + ' ₽';
    }
}

function starsFromRating(rating) {
    const r = parseInt(rating || '0', 10);
    if (!r || r < 1) return '';
    const safe = Math.min(5, Math.max(1, r));
    return '★'.repeat(safe) + '☆'.repeat(5 - safe);
}

function decisionLabel(d) {
    if (d === 'buy') return '✅ Куплен';
    if (d === 'not_buy') return '❌ Не куплен';
    if (d === 'plan_inspection') return '📅 Запланировать проверку';
    return '';
}

// Работа с DOM
function populateBrandSelect() {
    const brandSelect = document.getElementById('brand');
    Object.keys(MODELS_BY_BRAND).forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    });
}

function populateMotoClassSelect() {
    const classSelect = document.getElementById('moto-class');
    MOTO_CLASSES.forEach(cls => {
        const option = document.createElement('option');
        option.value = cls;
        option.textContent = cls;
        classSelect.appendChild(option);
    });
}

function setActiveTab(tabId) {
    state.activeTab = tabId;
    
    // Обновляем навигацию
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.nav-tab[data-tab="${tabId}"]`).classList.add('active');
    
    // Обновляем контент вкладок
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`tab-${tabId}`).classList.add('active');
    
    renderApp();
}

function renderTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleSettings = document.getElementById('theme-toggle-settings');
    
    if (state.theme === 'dark') {
        body.classList.add('dark');
        themeToggle.innerHTML = '☀️';
        themeToggleSettings.classList.remove('bg-slate-300');
        themeToggleSettings.classList.add('bg-indigo-600', 'justify-end');
    } else {
        body.classList.remove('dark');
        themeToggle.innerHTML = '🌙';
        themeToggleSettings.classList.remove('bg-indigo-600', 'justify-end');
        themeToggleSettings.classList.add('bg-slate-300');
    }
}

function renderTabs() {
    // Уже обработано в setActiveTab
}

function renderForm() {
    const form = state.form;
    
    // Заполняем основные поля
    document.getElementById('brand').value = form.brand;
    document.getElementById('brand-custom').value = form.brandCustom;
    document.getElementById('model').value = form.model;
    document.getElementById('model-custom').value = form.modelCustom;
    document.getElementById('year').value = form.year;
    document.getElementById('mileage').value = form.mileage;
    document.getElementById('vin').value = form.vin;
    document.getElementById('license-plate').value = form.licensePlate;
    document.getElementById('moto-class').value = form.motoClass;
    document.getElementById('gearbox-type').value = form.gearboxType;
    document.getElementById('engine-volume').value = form.engineVolume;
    document.getElementById('power-hp').value = form.powerHp;
    document.getElementById('origin-country').value = form.originCountry;
    document.getElementById('auction-type').value = form.auctionType;
    document.getElementById('legal-checked-via').value = form.legalCheckedVia;
    document.getElementById('legal-status').value = form.legalStatus;
    document.getElementById('legal-comment').value = form.legalComment;
    document.getElementById('price').value = form.price;
    document.getElementById('objective-price').value = form.objectivePrice;
    document.getElementById('seller-discount').value = form.sellerDiscount;
    document.getElementById('investments').value = form.investments;
    document.getElementById('profitability-comment').value = form.profitabilityComment;
    document.getElementById('key-finding').value = form.keyFinding;
    document.getElementById('expert-verdict').value = form.expertVerdict;
    document.getElementById('decision').value = form.decision;
    document.getElementById('inspection-date').value = form.inspectionDate;
    document.getElementById('inspection-time').value = form.inspectionTime;
    document.getElementById('inspection-address').value = form.inspectionAddress;
    document.getElementById('customer-phone').value = form.customerPhone;
    document.getElementById('seller-phone').value = form.sellerPhone;
    document.getElementById('inspection-notes').value = form.inspectionNotes;
    
    // Обновляем видимость полей для пользовательских марки и модели
    toggleBrandCustomVisibility();
    toggleModelCustomVisibility();
    
    // Обновляем видимость блока планирования проверки
    toggleInspectionPlanVisibility();
    
    // Обновляем сгенерированный отчет
    if (state.generatedReport) {
        document.getElementById('generated-report').textContent = state.generatedReport;
        document.getElementById('generated-report-container').classList.remove('hidden');
        document.getElementById('no-report-message').classList.add('hidden');
    } else {
        document.getElementById('generated-report-container').classList.add('hidden');
        document.getElementById('no-report-message').classList.remove('hidden');
    }
    
    // Обновляем текст экономии
    if (state.savingsText) {
        document.getElementById('savings-text').textContent = state.savingsText;
        document.getElementById('savings-text').classList.remove('hidden');
    } else {
        document.getElementById('savings-text').classList.add('hidden');
    }
    
    // Обновляем бейдж напоминания
    document.getElementById('reminder-badge').textContent = `Напоминание за ${state.reminderHours} ч до проверки`;
}

function renderReportsList() {
    const reportsList = document.getElementById('reports-list');
    const searchTerm = state.searchReports.toLowerCase().trim();
    
    // Фильтруем отчеты по поисковому запросу
    const filteredReports = state.reports.filter(report => {
        if (!searchTerm) return true;
        
        return (
            report.brand.toLowerCase().includes(searchTerm) ||
            report.model.toLowerCase().includes(searchTerm) ||
            (report.year || '').toLowerCase().includes(searchTerm) ||
            (report.vin || '').toLowerCase().includes(searchTerm) ||
            (report.licensePlate || '').toLowerCase().includes(searchTerm)
        );
    });
    
    // Сортируем по дате создания (новые сверху)
    filteredReports.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    
    if (filteredReports.length === 0) {
        reportsList.innerHTML = '<p class="text-sm text-slate-500">Сохраненных отчетов пока нет.</p>';
        return;
    }
    
    let html = '';
    filteredReports.forEach(report => {
        html += `
            <div class="report-item">
                <div class="report-item-container">
                    <div>
                        <div class="report-item-header">
                            ${report.brand} ${report.model} (${report.year || 'год не указан'})
                        </div>
                        <div class="report-item-details">
                            <span>Пробег: ${report.mileage || 'не указан'} тыс. км</span>
                            <span>Цена: ${report.price || 'не указана'}</span>
                            <span>VIN: ${report.vin || 'не указан'}</span>
                            <span>Номер: ${report.licensePlate || 'не указан'}</span>
                            <span>Класс: ${report.motoClass || 'не указан'}</span>
                            <span>Решение: ${decisionLabel(report.decision) || 'не указано'}</span>
                        </div>
                    </div>
                    <div class="report-item-actions">
                        <button class="action-btn indigo" data-id="${report.id}" data-action="load">
                            ✏️ В форму
                        </button>
                        <button class="action-btn emerald" data-id="${report.id}" data-action="copy">
                            📋 Скопировать текст
                        </button>
                        <button class="action-btn rose" data-id="${report.id}" data-action="delete">
                            🗑️ Удалить
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    
    reportsList.innerHTML = html;
    
    // Добавляем обработчики событий для кнопок
    reportsList.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const reportId = this.getAttribute('data-id');
            const action = this.getAttribute('data-action');
            
            switch (action) {
                case 'load':
                    handleLoadReportToForm(reportId);
                    break;
                case 'copy':
                    handleCopyReportFromDb(reportId);
                    break;
                case 'delete':
                    handleDeleteReport(reportId);
                    break;
            }
        });
    });
}

function renderToasts() {
    const toastsContainer = document.getElementById('toasts');
    toastsContainer.innerHTML = '';
    
    state.toasts.forEach(toast => {
        const toastEl = document.createElement('div');
        toastEl.className = `pointer-events-auto flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-white shadow-lg ${getToastBgClass(toast.type)}`;
        toastEl.textContent = toast.message;
        toastsContainer.appendChild(toastEl);
    });
}

function renderScrollTopButton() {
    const scrollTopBtn = document.getElementById('scroll-top');
    if (state.showScrollTop) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
}

// Вспомогательные функции для рендеринга
function toggleBrandCustomVisibility() {
    const brandCustomContainer = document.getElementById('brand-custom-container');
    if (state.form.brand === 'Другая марка') {
        brandCustomContainer.classList.remove('hidden');
    } else {
        brandCustomContainer.classList.add('hidden');
    }
}

function toggleModelCustomVisibility() {
    const modelCustomContainer = document.getElementById('model-custom-container');
    if (state.form.model === 'Другая модель') {
        modelCustomContainer.classList.remove('hidden');
    } else {
        modelCustomContainer.classList.add('hidden');
    }
}

function toggleInspectionPlanVisibility() {
    const inspectionPlanContainer = document.getElementById('inspection-plan-container');
    if (state.form.decision === 'plan_inspection') {
        inspectionPlanContainer.classList.remove('hidden');
    } else {
        inspectionPlanContainer.classList.add('hidden');
    }
}

function getToastBgClass(type) {
    switch (type) {
        case 'success': return 'bg-emerald-600';
        case 'warning': return 'bg-amber-500';
        case 'error': return 'bg-rose-600';
        default: return 'bg-slate-700';
    }
}

// Обработчики событий
function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    saveToLocalStorage();
    renderApp();
}

function handleBrandChange() {
    const brand = document.getElementById('brand').value;
    state.form.brand = brand;
    state.form.brandCustom = '';
    
    // Обновляем список моделей
    const modelSelect = document.getElementById('model');
    modelSelect.innerHTML = '<option value="">Выберите модель</option><option value="Другая модель">Другая модель</option>';
    
    if (brand && MODELS_BY_BRAND[brand]) {
        MODELS_BY_BRAND[brand].forEach(model => {
            const option = document.createElement('option');
            option.value = model;
            option.textContent = model;
            modelSelect.appendChild(option);
        });
    }
    
    // Сбрасываем модель, если она не соответствует выбранной марке
    if (state.form.model && !MODELS_BY_BRAND[brand]?.includes(state.form.model) && state.form.model !== 'Другая модель') {
        state.form.model = '';
    }
    
    updateProgressBar();
    saveFormToLocalStorage();
    renderForm();
}

function handleModelChange() {
    state.form.model = document.getElementById('model').value;
    state.form.modelCustom = '';
    updateProgressBar();
    saveFormToLocalStorage();
    renderForm();
}

function handleDecisionChange() {
    state.form.decision = document.getElementById('decision').value;
    saveFormToLocalStorage();
    renderForm();
}

function handleGenerateReport() {
    if (!validateForm()) return;
    
    const text = buildReportText(state.form);
    state.generatedReport = text;
    
    const savings = computeSavings(state.form);
    state.savingsText = savings.text;
    
    showToast('Отчет успешно сгенерирован', 'success');
    renderForm();
}

function handleSaveReport() {
    if (!validateForm()) return;
    
    const text = state.generatedReport || buildReportText(state.form);
    const brand = state.form.brand === 'Другая марка' ? state.form.brandCustom || 'Марка не указана' : state.form.brand;
    const model = state.form.model === 'Другая модель' ? state.form.modelCustom || 'Модель не указана' : state.form.model;
    
    const newReport = {
        id: String(Date.now()),
        createdAt: new Date().toISOString(),
        brand,
        model,
        year: state.form.year,
        mileage: state.form.mileage,
        vin: state.form.vin,
        licensePlate: state.form.licensePlate,
        motoClass: state.form.motoClass,
        decision: state.form.decision,
        price: state.form.price,
        objectivePrice: state.form.objectivePrice,
        sellerDiscount: state.form.sellerDiscount,
        investments: state.form.investments,
        generatedText: text,
    };
    
    state.reports.push(newReport);
    
    if (state.form.decision === 'plan_inspection' && 
        state.form.inspectionDate && 
        state.form.inspectionTime && 
        state.form.inspectionAddress && 
        state.form.customerPhone) {
        
        const newInspection = {
            id: String(Date.now()),
            createdAt: new Date().toISOString(),
            brand,
            model,
            year: state.form.year,
            date: state.form.inspectionDate,
            time: state.form.inspectionTime,
            address: state.form.inspectionAddress,
            customerPhone: state.form.customerPhone,
            sellerPhone: state.form.sellerPhone,
            notes: state.form.inspectionNotes,
            status: 'planned',
        };
        
        state.inspections.push(newInspection);
        showToast('Отчет сохранен и проверка запланирована', 'success');
    } else {
        showToast('Отчет сохранен в базу', 'success');
    }
    
    saveToLocalStorage();
    renderApp();
}

function handlePrintClientReport() {
    if (!validateForm()) return;
    
    const text = buildReportText(state.form);
    const brand = state.form.brand === 'Другая марка' ? state.form.brandCustom || 'Марка не указана' : state.form.brand;
    const model = state.form.model === 'Другая модель' ? state.form.modelCustom || 'Модель не указана' : state.form.model;
    const title = `Отчет по мотоциклу ${brand} ${model}`;
    
    const html = `<!DOCTYPE html><html lang='ru'><head><meta charSet='utf-8'/><title>${title}</title><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;padding:24px;line-height:1.5;}h1{font-size:20px;margin-bottom:16px;}pre{white-space:pre-wrap;font-family:'JetBrains Mono','Fira Code',monospace;font-size:13px;border:1px solid #CBD5F5;padding:16px;border-radius:12px;background:#F9FAFB;}</style></head><body><h1>${title}</h1><pre>${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre></body></html>`;
    
    const win = window.open('', '_blank');
    if (!win) {
        showToast('Разрешите всплывающие окна для печати PDF', 'warning');
        return;
    }
    
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    win.print();
}

function handleClearForm() {
    if (!confirm('Очистить все поля формы и начать заново')) return;
    
    state.form = createEmptyForm();
    state.generatedReport = '';
    state.savingsText = '';
    
    localStorage.removeItem(STORAGE_KEYS.form);
    showToast('Форма очищена', 'success');
    renderForm();
}

function handleCopyReport() {
    if (!state.generatedReport) {
        showToast('Сначала сгенерируйте отчет', 'warning');
        return;
    }
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(state.generatedReport).then(
            () => showToast('Отчет скопирован в буфер обмена', 'success'),
            () => showToast('Не удалось скопировать отчет', 'error')
        );
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = state.generatedReport;
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('Отчет скопирован в буфер обмена', 'success');
        } catch {
            showToast('Не удалось скопировать отчет', 'error');
        }
        document.body.removeChild(textarea);
    }
}

function handleSearchReports() {
    state.searchReports = document.getElementById('search-reports').value;
    renderReportsList();
}

function handleLoadReportToForm(reportId) {
    const report = state.reports.find(r => r.id === reportId);
    if (!report) return;
    
    state.form = createEmptyForm();
    state.form.brand = report.brand;
    state.form.model = report.model;
    state.form.year = report.year;
    state.form.mileage = report.mileage;
    state.form.vin = report.vin;
    state.form.licensePlate = report.licensePlate;
    state.form.motoClass = report.motoClass;
    state.form.price = report.price;
    state.form.objectivePrice = report.objectivePrice;
    state.form.sellerDiscount = report.sellerDiscount;
    state.form.investments = report.investments;
    state.form.decision = report.decision;
    
    state.generatedReport = report.generatedText;
    
    const savings = computeSavings(state.form);
    state.savingsText = savings.text;
    
    setActiveTab('report');
    showToast('Данные отчета загружены в форму', 'info');
    renderForm();
}

function handleCopyReportFromDb(reportId) {
    const report = state.reports.find(r => r.id === reportId);
    if (!report || !report.generatedText) {
        showToast('У этого отчета нет сохраненного текста', 'warning');
        return;
    }
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(report.generatedText).then(
            () => showToast('Текст отчета скопирован', 'success'),
            () => showToast('Не удалось скопировать текст', 'error')
        );
    }
}

function handleDeleteReport(reportId) {
    if (!confirm('Удалить этот отчет без возможности восстановления')) return;
    
    state.reports = state.reports.filter(r => r.id !== reportId);
    saveToLocalStorage();
    renderReportsList();
    showToast('Отчет удален', 'success');
}

function handleExportReports() {
    try {
        const blob = new Blob([JSON.stringify(state.reports, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `motodiag_reports_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('База отчетов экспортирована', 'success');
    } catch {
        showToast('Не удалось экспортировать базу отчетов', 'error');
    }
}

function handleImportReports() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = () => {
        const file = input.files && input.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(String(reader.result));
                if (!Array.isArray(data)) throw new Error('bad');
                
                if (!confirm(`Импортировать ${data.length} отчетов и добавить к текущей базе`)) return;
                
                state.reports = [...state.reports, ...data];
                saveToLocalStorage();
                renderReportsList();
                showToast('Отчеты импортированы', 'success');
            } catch {
                showToast('Файл не похож на базу отчетов', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function toggleAutoSave() {
    state.autoSave = !state.autoSave;
    const toggleBtn = document.getElementById('auto-save-toggle');
    
    if (state.autoSave) {
        toggleBtn.classList.remove('bg-slate-300');
        toggleBtn.classList.add('bg-emerald-500', 'justify-end');
    } else {
        toggleBtn.classList.remove('bg-emerald-500', 'justify-end');
        toggleBtn.classList.add('bg-slate-300');
    }
    
    saveToLocalStorage();
    showToast(`Автосохранение ${state.autoSave ? 'включено' : 'отключено'}`, 'info');
}

function handleExportSettings() {
    try {
        const settings = {
            theme: state.theme,
            autoSave: state.autoSave,
            vibration: state.vibration,
            inspectionNotifications: state.inspectionNotifications,
            reminderHours: state.reminderHours,
            form: state.form,
        };
        
        const blob = new Blob([JSON.stringify(settings, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `motodiag_settings_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('Настройки экспортированы', 'success');
    } catch {
        showToast('Не удалось экспортировать настройки', 'error');
    }
}

function handleImportSettings() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    input.onchange = () => {
        const file = input.files && input.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(String(reader.result));
                
                if (!confirm('Заменить текущие настройки импортированными')) return;
                
                if (data.theme) state.theme = data.theme;
                if (typeof data.autoSave === 'boolean') state.autoSave = data.autoSave;
                if (typeof data.vibration === 'boolean') state.vibration = data.vibration;
                if (typeof data.inspectionNotifications === 'boolean') state.inspectionNotifications = data.inspectionNotifications;
                if (typeof data.reminderHours === 'number') state.reminderHours = data.reminderHours;
                if (data.form) state.form = { ...createEmptyForm(), ...data.form };
                
                saveToLocalStorage();
                renderApp();
                showToast('Настройки импортированы', 'success');
            } catch {
                showToast('Файл не похож на настройки', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function handleClearAllData() {
    if (!confirm('Удалить все отчеты, проверки и настройки')) return;
    
    state.reports = [];
    state.inspections = [];
    state.form = createEmptyForm();
    state.generatedReport = '';
    state.savingsText = '';
    
    localStorage.removeItem(STORAGE_KEYS.reports);
    localStorage.removeItem(STORAGE_KEYS.inspections);
    localStorage.removeItem(STORAGE_KEYS.form);
    localStorage.removeItem(STORAGE_KEYS.settings);
    
    showToast('Все данные приложения очищены', 'success');
    renderApp();
}

function handleScroll() {
    state.showScrollTop = window.scrollY > 300;
    renderScrollTopButton();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Валидация и бизнес-логика
function validateForm() {
    if (!state.form.brand) {
        showToast('Выберите марку мотоцикла', 'warning');
        return false;
    }
    
    if (state.form.brand === 'Другая марка' && !state.form.brandCustom.trim()) {
        showToast('Укажите марку в поле другая марка', 'warning');
        return false;
    }
    
    if (!state.form.model) {
        showToast('Выберите модель мотоцикла', 'warning');
        return false;
    }
    
    if (state.form.model === 'Другая модель' && !state.form.modelCustom.trim()) {
        showToast('Укажите модель в поле другая модель', 'warning');
        return false;
    }
    
    if (!state.form.year) {
        showToast('Укажите год выпуска', 'warning');
        return false;
    }
    
    const yearNum = parseInt(state.form.year, 10);
    const maxYear = new Date().getFullYear() + 1;
    if (Number.isFinite(yearNum) && (yearNum < 1990 || yearNum > maxYear)) {
        showToast(`Год выпуска должен быть между 1990 и ${maxYear}`, 'warning');
        return false;
    }
    
    if (state.form.decision === 'plan_inspection') {
        if (!state.form.inspectionDate || !state.form.inspectionTime || !state.form.inspectionAddress.trim() || !state.form.customerPhone.trim()) {
            showToast('Для запланированной проверки заполните дату, время, адрес и телефон заказчика', 'warning');
            return false;
        }
    }
    
    return true;
}

function computeSavings(form) {
    const price = parseMoney(form.price);
    const objective = parseMoney(form.objectivePrice);
    const discount = parseMoney(form.sellerDiscount);
    const invest = parseMoney(form.investments);
    
    if (!price || !objective) return { text: '', value: 0 };
    
    const savings = objective - (price - discount) - invest;
    if (savings <= 0) return { text: '', value: savings };
    
    return {
        text: `💵 Общая потенциальная экономия для клиента: ${formatMoney(Math.round(savings))}`,
        value: savings,
    };
}

function buildReportText(form) {
    const brand = form.brand === 'Другая марка' ? form.brandCustom || 'Марка не указана' : form.brand;
    const model = form.model === 'Другая модель' ? form.modelCustom || 'Модель не указана' : form.model;

    let text = '';
    text += '🏍️ Мотодиагностика и подбор мотоциклов в Санкт-Петербурге\n';
    text += '👨‍🔧 Эксперт: Ланк Сергей\n';
    text += '🌐 Сайт: motopodbor.ru\n';
    text += '📞 Телефон: 8 950 005-05-08\n\n';

    text += '🔹 Исходные данные\n';
    text += `Мотоцикл: ${brand} ${model}\n`;
    if (form.year) text += `Год выпуска: ${form.year}\n`;
    if (form.mileage) text += `Пробег: ${form.mileage} тыс. км\n`;
    if (form.motoClass) text += `Класс: ${form.motoClass}\n`;
    if (form.engineVolume) text += `Объем двигателя: ${form.engineVolume} куб.см\n`;
    if (form.powerHp) text += `Мощность: ${form.powerHp} л.с.\n`;
    if (form.gearboxType) text += `Тип коробки: ${form.gearboxType}\n`;
    if (form.originCountry) text += `Происхождение: ${form.originCountry}\n`;
    if (form.auctionType) text += `Аукцион / поставка: ${form.auctionType}\n`;
    if (form.vin) text += `VIN / номер рамы: ${form.vin}\n`;
    if (form.licensePlate) text += `Гос. номер: ${form.licensePlate}\n`;
    text += '\n';

    text += '🔎 Документы и юридическая чистота\n';
    if (form.legalCheckedVia) text += `Источник проверки: ${form.legalCheckedVia}\n`;
    if (form.legalStatus) text += `Статус: ${form.legalStatus}\n`;
    if (form.legalComment) text += `Комментарий: ${form.legalComment}\n`;
    text += '\n';

    text += '💰 Финансовый блок\n';
    if (form.price) text += `Цена продавца: ${form.price}\n`;
    if (form.objectivePrice) text += `Объективная стоимость: ${form.objectivePrice}\n`;
    if (form.sellerDiscount) text += `Ожидаемая скидка: ${form.sellerDiscount}\n`;
    if (form.investments) text += `Оценка необходимых вложений: ${form.investments}\n`;
    const { text: savings } = computeSavings(form);
    if (savings) text += `${savings}\n`;
    if (form.profitabilityComment) text += `Комментарий по рентабельности: ${form.profitabilityComment}\n`;
    text += '\n';

    text += '💡 Итоги диагностики\n';
    if (form.keyFinding) text += `Ключевая находка: ${form.keyFinding}\n`;
    if (form.expertVerdict) text += `Вердикт эксперта: ${form.expertVerdict}\n`;
    if (form.decision) text += `Решение: ${decisionLabel(form.decision)}\n`;
    if (form.decision === 'plan_inspection' && form.inspectionDate && form.inspectionTime) {
        text += `Запланированная проверка: ${form.inspectionDate} ${form.inspectionTime}\n`;
        if (form.inspectionAddress) text += `Адрес проверки: ${form.inspectionAddress}\n`;
        if (form.customerPhone) text += `Телефон заказчика: ${form.customerPhone}\n`;
        if (form.sellerPhone) text += `Телефон продавца: ${form.sellerPhone}\n`;
        if (form.inspectionNotes) text += `Заметки по проверке: ${form.inspectionNotes}\n`;
    }
    text += '\n';

    text += '────────────────────────────\n';
    text += 'Готов помочь подобрать и проверить мотоцикл в Санкт-Петербурге и области.\n';
    text += 'Связь: 8 950 005-05-08 (Ланк Сергей)\n';
    text += 'Сайт для заявок: motopodbor.ru\n';

    return text;
}

function updateProgressBar() {
    const brandFilled = state.form.brand && (state.form.brand !== 'Другая марка' || !!state.form.brandCustom.trim());
    const modelFilled = state.form.model && (state.form.model !== 'Другая модель' || !!state.form.modelCustom.trim());
    const yearFilled = !!state.form.year;
    const count = [brandFilled, modelFilled, yearFilled].filter(Boolean).length;
    const progress = (count / 3) * 100;
    
    document.getElementById('basic-progress').textContent = `${Math.round(progress)}%`;
    document.getElementById('progress-bar').style.width = `${progress}%`;
}

// Система уведомлений
function showToast(message, type = 'info') {
    const id = Date.now() + Math.random();
    state.toasts.push({ id, type, message });
    
    if (state.vibration && 'navigator' in window && window.navigator.vibrate) {
        window.navigator.vibrate(80);
    }
    
    renderToasts();
    
    setTimeout(() => {
        state.toasts = state.toasts.filter(t => t.id !== id);
        renderToasts();
    }, 4000);
}

// Автосохранение формы
function setupFormAutoSave() {
    const formElements = document.querySelectorAll('#report-form input, #report-form select, #report-form textarea');
    
    formElements.forEach(element => {
        element.addEventListener('input', function() {
            updateFormFromDOM();
            updateProgressBar();
            
            if (state.autoSave) {
                saveFormToLocalStorage();
            }
        });
        
        element.addEventListener('change', function() {
            updateFormFromDOM();
            updateProgressBar();
            
            if (state.autoSave) {
                saveFormToLocalStorage();
            }
        });
    });
}

function updateFormFromDOM() {
    state.form.brand = document.getElementById('brand').value;
    state.form.brandCustom = document.getElementById('brand-custom').value;
    state.form.model = document.getElementById('model').value;
    state.form.modelCustom = document.getElementById('model-custom').value;
    state.form.year = document.getElementById('year').value;
    state.form.mileage = document.getElementById('mileage').value;
    state.form.vin = document.getElementById('vin').value;
    state.form.licensePlate = document.getElementById('license-plate').value;
    state.form.motoClass = document.getElementById('moto-class').value;
    state.form.gearboxType = document.getElementById('gearbox-type').value;
    state.form.engineVolume = document.getElementById('engine-volume').value;
    state.form.powerHp = document.getElementById('power-hp').value;
    state.form.originCountry = document.getElementById('origin-country').value;
    state.form.auctionType = document.getElementById('auction-type').value;
    state.form.legalCheckedVia = document.getElementById('legal-checked-via').value;
    state.form.legalStatus = document.getElementById('legal-status').value;
    state.form.legalComment = document.getElementById('legal-comment').value;
    state.form.price = document.getElementById('price').value;
    state.form.objectivePrice = document.getElementById('objective-price').value;
    state.form.sellerDiscount = document.getElementById('seller-discount').value;
    state.form.investments = document.getElementById('investments').value;
    state.form.profitabilityComment = document.getElementById('profitability-comment').value;
    state.form.keyFinding = document.getElementById('key-finding').value;
    state.form.expertVerdict = document.getElementById('expert-verdict').value;
    state.form.decision = document.getElementById('decision').value;
    state.form.inspectionDate = document.getElementById('inspection-date').value;
    state.form.inspectionTime = document.getElementById('inspection-time').value;
    state.form.inspectionAddress = document.getElementById('inspection-address').value;
    state.form.customerPhone = document.getElementById('customer-phone').value;
    state.form.sellerPhone = document.getElementById('seller-phone').value;
    state.form.inspectionNotes = document.getElementById('inspection-notes').value;
}

// Работа с localStorage
function saveToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEYS.reports, JSON.stringify(state.reports));
        localStorage.setItem(STORAGE_KEYS.inspections, JSON.stringify(state.inspections));
        localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify({
            theme: state.theme,
            autoSave: state.autoSave,
            vibration: state.vibration,
            inspectionNotifications: state.inspectionNotifications,
            reminderHours: state.reminderHours,
        }));
        
        if (state.autoSave) {
            saveFormToLocalStorage();
        }
    } catch (error) {
        console.error('Ошибка сохранения в localStorage:', error);
    }
}

function saveFormToLocalStorage() {
    try {
        localStorage.setItem(STORAGE_KEYS.form, JSON.stringify(state.form));
    } catch (error) {
        console.error('Ошибка сохранения формы в localStorage:', error);
    }
}

function loadFromLocalStorage() {
    try {
        const rawReports = localStorage.getItem(STORAGE_KEYS.reports);
        if (rawReports) {
            state.reports = JSON.parse(rawReports);
        }
    } catch (error) {
        console.error('Ошибка загрузки отчетов из localStorage:', error);
    }
    
    try {
        const rawInspections = localStorage.getItem(STORAGE_KEYS.inspections);
        if (rawInspections) {
            state.inspections = JSON.parse(rawInspections);
        }
    } catch (error) {
        console.error('Ошибка загрузки проверок из localStorage:', error);
    }
    
    try {
        const rawForm = localStorage.getItem(STORAGE_KEYS.form);
        if (rawForm) {
            state.form = { ...createEmptyForm(), ...JSON.parse(rawForm) };
        }
    } catch (error) {
        console.error('Ошибка загрузки формы из localStorage:', error);
    }
    
    try {
        const rawSettings = localStorage.getItem(STORAGE_KEYS.settings);
        if (rawSettings) {
            const settings = JSON.parse(rawSettings);
            if (settings.theme) state.theme = settings.theme;
            if (typeof settings.autoSave === 'boolean') state.autoSave = settings.autoSave;
            if (typeof settings.vibration === 'boolean') state.vibration = settings.vibration;
            if (typeof settings.inspectionNotifications === 'boolean') state.inspectionNotifications = settings.inspectionNotifications;
            if (typeof settings.reminderHours === 'number') state.reminderHours = settings.reminderHours;
        }
    } catch (error) {
        console.error('Ошибка загрузки настроек из localStorage:', error);
    }
}