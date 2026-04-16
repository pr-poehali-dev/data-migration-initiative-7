import Icon from "@/components/ui/icon";

const models = [
  {
    name: "Российская модель",
    subtitle: "Советская и постсоветская традиция",
    description: "Государственно-ориентированный подход с акцентом на специализированные учреждения и коррекционную педагогику",
    features: [
      "Специализированные школы-интернаты",
      "Системная коррекционная работа",
      "Сильная научная база (Земцова, Кулагин)",
      "Единый государственный стандарт",
      "Упор на осязательное обучение по Брайлю",
      "Тифлопедагог как центральная фигура",
    ],
    highlighted: false,
  },
  {
    name: "Западная модель",
    subtitle: "Европейская и американская традиция",
    description: "Инклюзивный подход с интеграцией незрячих детей в общеобразовательную среду при адаптивной поддержке",
    features: [
      "Инклюзивное образование в общих классах",
      "Индивидуальный образовательный план (IEP)",
      "Ассистивные технологии и гаджеты",
      "Акцент на самостоятельность и ориентирование",
      "Семья как партнёр в обучении",
      "Гибкость методик под каждого ребёнка",
    ],
    highlighted: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-amber mb-4 block">Сравнительный анализ</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4 text-balance">
            Российская и Западная модели
          </h2>
          <p className="text-muted-foreground text-lg">Два подхода к обучению незрячих: точки различия и точки пересечения.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {models.map((model, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-2xl border ${
                model.highlighted ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
              }`}
            >
              <h3 className={`text-xl mb-1 font-medium ${model.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                {model.name}
              </h3>
              <p className={`text-sm mb-4 ${model.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {model.subtitle}
              </p>
              <p className={`mb-8 leading-relaxed text-sm ${model.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {model.description}
              </p>

              <ul className="space-y-3">
                {model.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Check" size={18} className="text-sage mt-0.5 shrink-0" />
                    <span className={`text-sm ${model.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
