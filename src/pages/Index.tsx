import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: "Zap",
      title: "Быстрый результат!",
      description: "Первые 10-20 заявок кому интересен ваш продукт уже сразу на следующий день!"
    },
    {
      icon: "Rocket",
      title: "Мгновенный запуск!",
      description: "Возможность запуститься за один вечер — без воронок и сложной технички, даже если вы не имели опыта в маркетинге!"
    },
    {
      icon: "Users",
      title: "Делегируйте процесс!",
      description: "Вы можете полностью делегировать процесс на своего сотрудника или взять по нашей инструкции себе помощника за минимальную оплату от выполненной работы."
    },
    {
      icon: "MessageCircle",
      title: "Поддержим если будут вопросы!",
      description: "В канале присутствует техподдержка, которая всегда на связи и поможет разобраться если у вас возникнут вопросы."
    },
    {
      icon: "Shield",
      title: "Без шансов ошибиться и потерять деньги!",
      description: "Вы сами запускаете себя и не зависите больше от подрядчиков по трафику и продюсеров."
    },
    {
      icon: "TrendingUp",
      title: "Увеличение потока клиентов",
      description: "Система позволяет увеличить поток клиентов в 10 раз без сложных схем и больших вложений."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-scale-in">
            <Icon name="Sparkles" size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Telegram-система привлечения клиентов</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Увеличьте поток клиентов{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              в 10 раз
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-muted-foreground max-w-3xl mx-auto font-light">
            через Telegram в своем проекте без сложных схем мгновенно!
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-muted-foreground/80 max-w-3xl mx-auto">
            Создайте систему привлечения клиентов и подписчиков в Telegram уже за 1 день и получайте отклики на свои услуги ежедневно!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-7 rounded-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Начать привлекать клиентов
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-7 rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
            >
              <Icon name="MessageSquare" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
          
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-primary" />
              <span>Без вложений</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-primary" />
              <span>Запуск за 1 день</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Check" size={18} className="text-primary" />
              <span>Без опыта в маркетинге</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Кому подходит система?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Если вы - психолог, коуч, маркетолог, агентство или другой эксперт, который продает свои услуги онлайн и хотите стабильные заявки, без подрядчиков, сложных схем и больших вложений - то предложение для вас!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <Icon name={benefit.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы увеличить поток клиентов?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к системе и начните получать заявки уже завтра!
          </p>
          <Button 
            size="lg" 
            className="text-lg px-12 py-8 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:scale-110"
          >
            <Icon name="Rocket" size={24} className="mr-2" />
            Подключиться к системе
          </Button>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground text-sm">
          <p>© 2024 Telegram-система привлечения клиентов. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;