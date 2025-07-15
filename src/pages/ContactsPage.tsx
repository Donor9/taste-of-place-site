import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const ContactsPage = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'ул. Пушкина, 15, Москва',
      subtitle: 'м. Чистые пруды, 3 минуты пешком'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (495) 123-45-67',
      subtitle: 'Звоните для бронирования столиков'
    },
    {
      icon: Clock,
      title: 'Часы работы',
      content: 'Ежедневно с 8:00 до 22:00',
      subtitle: 'Кухня работает до 21:30'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@cafedelice.ru',
      subtitle: 'Ответим в течение часа'
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', handle: '@cafedelice_msk' },
    { icon: Facebook, name: 'Facebook', handle: 'Café Delice Moscow' }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Контакты
          </h1>
          <p className="text-lg text-muted-foreground">
            Мы всегда рады вашему визиту. Найти нас очень просто!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Информация для связи
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-xl">Следите за нами</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <social.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.handle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Directions */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Как добраться
            </h2>
            
            {/* Map Placeholder */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="w-full h-80 bg-accent/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Интерактивная карта
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      ул. Пушкина, 15, Москва
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Directions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Как найти нас</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">На метро</h4>
                  <p className="text-muted-foreground">
                    Станция «Чистые пруды» (Сокольническая линия). 
                    Выход к Чистопрудному бульвару, 3 минуты пешком.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">На автомобиле</h4>
                  <p className="text-muted-foreground">
                    Есть платная парковка во дворе. Въезд с ул. Пушкина, 
                    стоимость 100₽/час.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Ориентиры</h4>
                  <p className="text-muted-foreground">
                    Находимся в историческом центре, рядом с Чистопрудным бульваром. 
                    В здании есть зелёная вывеска «Café Delice».
                  </p>
                </div>

                <Button className="w-full mt-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="mt-16">
          <Card className="bg-accent/30">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Готовы к визиту?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Забронируйте столик заранее, чтобы гарантированно получить место 
                в удобное для вас время. Или просто приходите — мы постараемся 
                найти для вас свободный столик!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Забронировать столик
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Написать нам
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;