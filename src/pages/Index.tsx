import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Shield",
      title: "ISO 9001 Сертификация",
      description: "Система менеджмента качества для повышения эффективности бизнес-процессов",
      color: "bg-primary"
    },
    {
      icon: "FileCheck",
      title: "Сертификация продукции",
      description: "Подтверждение соответствия товаров техническим регламентам и стандартам",
      color: "bg-secondary"
    },
    {
      icon: "Award",
      title: "Экологическая сертификация",
      description: "Оценка воздействия на окружающую среду и получение экосертификатов",
      color: "bg-accent"
    },
    {
      icon: "CheckCircle",
      title: "ГОСТ сертификация",
      description: "Соответствие российским государственным стандартам качества",
      color: "bg-primary"
    }
  ];

  const benefits = [
    {
      icon: "Clock",
      title: "Быстрые сроки",
      description: "От 7 дней до получения сертификата"
    },
    {
      icon: "Users",
      title: "Экспертная команда",
      description: "15+ лет опыта в сертификации"
    },
    {
      icon: "Globe",
      title: "По всей России",
      description: "Работаем во всех регионах РФ"
    },
    {
      icon: "DollarSign",
      title: "Прозрачные цены",
      description: "Без скрытых платежей"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-gray-900">CertPro</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            <Button variant="outline">Консультация</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
            Профессиональная сертификация
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            Сертификация товаров
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> и услуг</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Помогаем получить все необходимые сертификаты для вашего бизнеса. 
            Быстро, надёжно, с гарантией результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Download" className="mr-2 h-5 w-5" />
              Скачать прайс-лист
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр сертификационных услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon name={service.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="w-full mt-4 text-primary">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Преимущества работы с нашей компанией</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon name={benefit.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Выданных сертификатов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <div className="text-gray-600">Дней средний срок</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Получить консультацию</h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Отправьте заявку</CardTitle>
                <CardDescription>Все поля обязательны для заполнения</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea id="message" placeholder="Расскажите о ваших потребностях в сертификации..." />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Icon name="MapPin" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Адрес</div>
                      <div className="text-gray-600">г. Москва, ул. Примерная, д. 123</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Phone" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Телефон</div>
                      <div className="text-gray-600">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <div className="text-gray-600">info@certpro.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Clock" className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <div className="font-semibold text-gray-900">Время работы</div>
                      <div className="text-gray-600">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Бесплатная консультация</h4>
                <p className="text-gray-600 mb-4">
                  Получите персональную консультацию по вопросам сертификации
                </p>
                <Button variant="outline" className="w-full">
                  <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Shield" className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold">CertPro</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Профессиональная сертификация товаров и услуг. 
                Ваш надёжный партнёр в мире качества.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ISO сертификация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ГОСТ сертификация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Экосертификация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Пожарная безопасность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Лицензии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@certpro.ru</div>
                <div>г. Москва, ул. Примерная, 123</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CertPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;