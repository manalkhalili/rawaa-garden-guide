
import { Plant } from '../data/plantsData';

export class PlantBotService {
  private plants: Plant[];

  constructor(plants: Plant[]) {
    this.plants = plants;
  }

  getBotResponse(userMessage: string): string {
    const message = userMessage.toLowerCase().trim();
    
    // التحقق من السلامات والوداع
    if (this.isGreeting(message)) {
      return 'أهلاً وسهلاً! 🌱 أنا هنا لمساعدتك في كل ما يتعلق بالنباتات. يمكنك أن تسألني عن:\n\n• معلومات عن نبتة معينة\n• طرق العناية بالنباتات\n• النباتات المناسبة للمبتدئين\n• النباتات الداخلية أو الخارجية\n• البذور والزراعة\n\nما الذي تود معرفته؟ 🌿';
    }

    if (this.isFarewell(message)) {
      return 'وداعاً! 👋 أتمنى أن أكون قد ساعدتك. لا تتردد في العودة إذا كان لديك أي استفسار آخر عن النباتات! 🌺';
    }

    // البحث عن النباتات
    const foundPlant = this.findPlantByName(message);
    if (foundPlant) {
      return this.getDetailedPlantInfo(foundPlant);
    }

    // استفسارات عامة عن الفئات
    if (this.isAsking(message, ['داخلي', 'داخلية', 'منزلية', 'بيت'])) {
      const indoorPlants = this.plants.filter(p => p.category === 'indoor');
      return this.getCategoryResponse('النباتات الداخلية', indoorPlants);
    }

    if (this.isAsking(message, ['خارجي', 'خارجية', 'حديقة', 'حدائق'])) {
      const outdoorPlants = this.plants.filter(p => p.category === 'outdoor');
      return this.getCategoryResponse('النباتات الخارجية', outdoorPlants);
    }

    if (this.isAsking(message, ['بذور', 'بذرة', 'زراعة', 'بذر'])) {
      const seeds = this.plants.filter(p => p.category === 'seed');
      return this.getCategoryResponse('البذور', seeds);
    }

    // نصائح العناية العامة
    if (this.isAsking(message, ['عناية', 'ري', 'تسميد', 'اهتمام', 'كيف'])) {
      return this.getGeneralCareAdvice();
    }

    // نباتات للمبتدئين
    if (this.isAsking(message, ['مبتدئ', 'سهل', 'سهلة', 'أول'])) {
      const easyPlants = this.plants.filter(p => p.difficulty === 'سهل');
      return this.getEasyPlantsResponse(easyPlants);
    }

    // البحث بالكلمات المفتاحية
    const relatedPlants = this.searchPlantsByKeywords(message);
    if (relatedPlants.length > 0) {
      return this.getSearchResults(relatedPlants, message);
    }

    // الرد الافتراضي
    return 'أعتذر، لم أفهم سؤالك تماماً. 🤔\n\nيمكنك أن تسألني عن:\n• أسماء النباتات الموجودة لدينا\n• طرق العناية بنبتة معينة\n• النباتات المناسبة للمبتدئين\n• الفرق بين النباتات الداخلية والخارجية\n\nحاول أن تكون أكثر تحديداً في سؤالك! 🌿';
  }

  private isGreeting(message: string): boolean {
    const greetings = ['مرحبا', 'أهلا', 'السلام', 'صباح', 'مساء', 'هلا', 'اهلين'];
    return greetings.some(greeting => message.includes(greeting));
  }

  private isFarewell(message: string): boolean {
    const farewells = ['وداع', 'باي', 'شكرا', 'تسلم', 'الله يعطيك', 'انتهيت'];
    return farewells.some(farewell => message.includes(farewell));
  }

  private isAsking(message: string, keywords: string[]): boolean {
    return keywords.some(keyword => message.includes(keyword));
  }

  private findPlantByName(message: string): Plant | null {
    return this.plants.find(plant => 
      message.includes(plant.name.toLowerCase()) ||
      (plant.scientificName && message.includes(plant.scientificName.toLowerCase()))
    ) || null;
  }

  private searchPlantsByKeywords(message: string): Plant[] {
    return this.plants.filter(plant => 
      plant.shortDescription.toLowerCase().includes(message) ||
      plant.fullDescription.toLowerCase().includes(message) ||
      plant.careInstructions.toLowerCase().includes(message) ||
      (plant.benefits && plant.benefits.some(benefit => benefit.toLowerCase().includes(message)))
    );
  }

  private getDetailedPlantInfo(plant: Plant): string {
    return `🌿 **${plant.name}**\n\n` +
           `📋 **الوصف:** ${plant.shortDescription}\n\n` +
           `🏷️ **النوع:** ${this.getCategoryName(plant.category)}\n` +
           `🔬 **الاسم العلمي:** ${plant.scientificName || 'غير متوفر'}\n` +
           `🌍 **الموطن الأصلي:** ${plant.origin || 'غير متوفر'}\n` +
           `📊 **مستوى الصعوبة:** ${plant.difficulty || 'غير محدد'}\n\n` +
           `💧 **الري:** ${plant.wateringFrequency || 'غير محدد'}\n` +
           `☀️ **الإضاءة:** ${plant.sunlight || 'غير محدد'}\n` +
           `🌡️ **درجة الحرارة:** ${plant.temperature || 'غير محدد'}\n` +
           `💨 **الرطوبة:** ${plant.humidity || 'غير محدد'}\n\n` +
           `🌱 **تعليمات العناية:**\n${plant.careInstructions}\n\n` +
           (plant.benefits ? `✨ **الفوائد:**\n${plant.benefits.map(benefit => `• ${benefit}`).join('\n')}\n\n` : '') +
           (plant.commonProblems ? `⚠️ **مشاكل شائعة:**\n${plant.commonProblems.map(problem => `• ${problem}`).join('\n')}` : '');
  }

  private getCategoryResponse(categoryName: string, plants: Plant[]): string {
    if (plants.length === 0) {
      return `نعتذر، لا توجد نباتات في فئة ${categoryName} حالياً.`;
    }

    return `🌿 **${categoryName}** (${plants.length} نوع)\n\n` +
           plants.map(plant => `• **${plant.name}**: ${plant.shortDescription}`).join('\n\n') +
           '\n\nاختر اسم أي نبتة للحصول على معلومات مفصلة عنها! 🌱';
  }

  private getEasyPlantsResponse(plants: Plant[]): string {
    if (plants.length === 0) {
      return 'جميع النباتات لدينا تحتاج إلى عناية خاصة، لكن يمكنني مساعدتك في اختيار الأنسب!';
    }

    return `🌱 **النباتات المناسبة للمبتدئين:**\n\n` +
           plants.map(plant => `• **${plant.name}**: ${plant.shortDescription}`).join('\n\n') +
           '\n\nهذه النباتات سهلة العناية ومثالية للمبتدئين! 😊';
  }

  private getSearchResults(plants: Plant[], query: string): string {
    return `🔍 **نتائج البحث عن "${query}":**\n\n` +
           plants.slice(0, 3).map(plant => `• **${plant.name}**: ${plant.shortDescription}`).join('\n\n') +
           (plants.length > 3 ? `\n\n... وجدت ${plants.length - 3} نتائج أخرى` : '') +
           '\n\nاسأل عن أي نبتة للحصول على تفاصيل أكثر! 🌿';
  }

  private getGeneralCareAdvice(): string {
    return `🌿 **نصائح عامة للعناية بالنباتات:**\n\n` +
           `💧 **الري:**\n• تحقق من رطوبة التربة قبل الري\n• تجنب الإفراط في الري\n• استخدم ماء بدرجة حرارة الغرفة\n\n` +
           `☀️ **الإضاءة:**\n• معظم النباتات تحب الضوء الساطع غير المباشر\n• تجنب أشعة الشمس المباشرة للنباتات الداخلية\n\n` +
           `🌱 **التسميد:**\n• استخدم الأسمدة خلال موسم النمو\n• تجنب التسميد في الشتاء\n\n` +
           `✂️ **التقليم:**\n• قم بإزالة الأوراق الميتة أو المريضة\n• قلم النباتات لتشجيع النمو الجديد\n\n` +
           `هل تريد نصائح محددة لنبتة معينة؟ اذكر اسمها! 🌺`;
  }

  private getCategoryName(category: string): string {
    switch (category) {
      case 'indoor': return 'نباتات داخلية';
      case 'outdoor': return 'نباتات خارجية';
      case 'seed': return 'بذور';
      default: return 'غير محدد';
    }
  }
}
