// Маппинг групп категорий согласно структуре каталога

export interface CategoryGroup {
  id: string;
  name: string;
  slug: string;
  categoryKeywords: string[]; // Ключевые слова для сопоставления категорий
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'sortovoy-prokat',
    name: 'Сортовой прокат',
    slug: 'sortovoy-prokat',
    categoryKeywords: [
      'арматура',
      'катанка',
      'балк',
      'швеллер',
      'уголок',
      'круг г/к',
      'полоса г/к',
      'квадрат г/к',
      'оцинкован',
      'прокат',
    ],
  },
  {
    id: 'metizy',
    name: 'Метизы',
    slug: 'metizy',
    categoryKeywords: [
      'калибровк',
      'серебрянк',
      'проволок',
      'канат',
      'крепеж',
      'гвозд',
      'болт',
      'цеп',
      'сетк',
      'лент',
      'электрод',
      'винт',
      'гайк',
      'шуруп',
      'шайб',
      'шпильк',
      'шплинт',
      'дюбель',
      'анкер',
      'саморез',
    ],
  },
  {
    id: 'kachestvennye-stali',
    name: 'Качественные стали',
    slug: 'kachestvennye-stali',
    categoryKeywords: [
      'конструкционн',
      'инструментальн',
      'поковк',
      'сталь сорт конструкц',
      'сталь сорт инструм',
    ],
  },
  {
    id: 'sudovaya-stal',
    name: 'Судовая сталь',
    slug: 'sudovaya-stal',
    categoryKeywords: ['судов', 'морск'],
  },
  {
    id: 'mostovaya-stal',
    name: 'Мостовая сталь',
    slug: 'mostovaya-stal',
    categoryKeywords: ['мостов', 'мост'],
  },
  {
    id: 'dupleksnaya-stal',
    name: 'Дуплексная сталь',
    slug: 'dupleksnaya-stal',
    categoryKeywords: ['дуплекс'],
  },
  {
    id: 'listovoy-prokat',
    name: 'Листовой прокат',
    slug: 'listovoy-prokat',
    categoryKeywords: [
      'лист г/к',
      'лист х/к',
      'лист оцинкован',
      'лист рифлен',
      'лист нержав',
      'профнастил',
      'профлист',
      'просечно-вытяжн',
      'пвл',
      'рулонн',
      'сталь листов',
      'сталь кровельн',
    ],
  },
  {
    id: 'tsvetnye-metally',
    name: 'Цветные металлы',
    slug: 'tsvetnye-metally',
    categoryKeywords: [
      'алюмин',
      'дюрал',
      'мед',
      'бронз',
      'латун',
      'олов',
      'свинец',
      'цинк',
      'нихром',
    ],
  },
  {
    id: 'nerzhaveyushchaya-stal',
    name: 'Нержавеющая сталь',
    slug: 'nerzhaveyushchaya-stal',
    categoryKeywords: [
      'нержав',
      'сталь сорт нерж',
      'сталь листов нержав',
      'трубы нержав',
    ],
  },
  {
    id: 'iznosostoykaya-stal',
    name: 'Износостойкая, Высокопрочная, сталь Гадфильда',
    slug: 'iznosostoykaya-stal',
    categoryKeywords: ['износостойк', 'высокопрочн', 'гадфильд'],
  },
  {
    id: 'truby',
    name: 'Трубы',
    slug: 'truby',
    categoryKeywords: [
      'труб',
      'водогазопров',
      'вгп',
      'электросварн',
      'г/д',
      'х/д',
      'чугунн',
    ],
  },
  {
    id: 'podshipniki',
    name: 'Подшипники',
    slug: 'podshipniki',
    categoryKeywords: ['подшипник'],
  },
  {
    id: 'krovelnye-materialy',
    name: 'Кровельные материалы',
    slug: 'krovelnye-materialy',
    categoryKeywords: ['кровельн', 'профнастил'],
  },
  {
    id: 'inzhenernye-sistemy',
    name: 'Инженерные системы',
    slug: 'inzhenernye-sistemy',
    categoryKeywords: [
      'отвод',
      'фланец',
      'задвижк',
      'клапан',
      'затвор',
      'кран',
      'фитинг',
      'тройник',
      'переход',
      'заглушк',
      'радиатор',
      'фильтр',
      'грязевик',
      'элеватор',
      'канализац',
      'теплоизоляц',
      'уплотнен',
      'регулятор',
      'коллектор',
      'насос',
      'прибор учет',
      'кипиа',
      'детали трубопровод',
      'хомут',
      'прокладк',
      'сгон',
      'бочат',
      'резьб',
      'узел подключен',
    ],
  },
  {
    id: 'elektroinstrumenty',
    name: 'Электроинструменты',
    slug: 'elektroinstrumenty',
    categoryKeywords: ['электроинструмент', 'инструмент'],
  },
];

// Функция для определения группы категории по её названию
export function getCategoryGroup(categoryName: string): string {
  const normalizedName = categoryName.toLowerCase();

  // Сначала собираем все совпадения с приоритетами (более длинные ключевые слова = выше приоритет)
  const matches: Array<{ groupId: string; priority: number }> = [];

  for (const group of CATEGORY_GROUPS) {
    for (const keyword of group.categoryKeywords) {
      const keywordLower = keyword.toLowerCase();
      if (normalizedName.includes(keywordLower)) {
        // Приоритет = длина ключевого слова (более длинные = более специфичные)
        matches.push({
          groupId: group.id,
          priority: keywordLower.length,
        });
      }
    }
  }

  // Если есть совпадения, возвращаем группу с наивысшим приоритетом
  if (matches.length > 0) {
    // Сортируем по приоритету (убывание) и возвращаем первую
    matches.sort((a, b) => b.priority - a.priority);
    return matches[0].groupId;
  }

  // Если не найдено, возвращаем группу "Остальные"
  return 'ostalnye';
}

// Группа "Остальные"
export const OTHER_GROUP: CategoryGroup = {
  id: 'ostalnye',
  name: 'Остальные',
  slug: 'ostalnye',
  categoryKeywords: [],
};

// Получить все группы включая "Остальные"
export function getAllGroups(): CategoryGroup[] {
  return [...CATEGORY_GROUPS, OTHER_GROUP];
}

// Получить группу по ID
export function getGroupById(groupId: string): CategoryGroup | undefined {
  if (groupId === 'ostalnye') {
    return OTHER_GROUP;
  }
  return CATEGORY_GROUPS.find((g) => g.id === groupId);
}

// Получить группу по slug
export function getGroupBySlug(groupSlug: string): CategoryGroup | undefined {
  if (groupSlug === 'ostalnye') {
    return OTHER_GROUP;
  }
  return CATEGORY_GROUPS.find((g) => g.slug === groupSlug);
}
