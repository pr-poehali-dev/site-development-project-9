import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  students: number;
  rating: number;
  price: string;
  image: string;
}

interface ForumThread {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [forumCategory, setForumCategory] = useState('all');

  const courses: Course[] = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Изучите HTML, CSS, JavaScript и React за 3 месяца',
      category: 'Программирование',
      students: 1234,
      rating: 4.8,
      price: '12 990 ₽',
      image: '🚀'
    },
    {
      id: 2,
      title: 'UX/UI дизайн',
      description: 'Создавайте красивые интерфейсы с помощью Figma',
      category: 'Дизайн',
      students: 856,
      rating: 4.9,
      price: '9 990 ₽',
      image: '🎨'
    },
    {
      id: 3,
      title: 'Python для анализа данных',
      description: 'Работайте с данными, визуализацией и машинным обучением',
      category: 'Программирование',
      students: 2103,
      rating: 4.7,
      price: '14 990 ₽',
      image: '📊'
    },
    {
      id: 4,
      title: 'Цифровой маркетинг',
      description: 'Освойте SMM, SEO и контент-маркетинг',
      category: 'Маркетинг',
      students: 1567,
      rating: 4.6,
      price: '11 990 ₽',
      image: '📱'
    }
  ];

  const forumThreads: ForumThread[] = [
    {
      id: 1,
      title: 'Как выбрать первый язык программирования?',
      author: 'Александр Петров',
      category: 'Программирование',
      replies: 45,
      views: 892,
      lastActivity: '5 мин назад'
    },
    {
      id: 2,
      title: 'Лучшие практики для UI/UX дизайна в 2024',
      author: 'Мария Иванова',
      category: 'Дизайн',
      replies: 23,
      views: 456,
      lastActivity: '1 час назад'
    },
    {
      id: 3,
      title: 'Вопросы по курсу Python для новичков',
      author: 'Дмитрий Соколов',
      category: 'Программирование',
      replies: 67,
      views: 1234,
      lastActivity: '30 мин назад'
    },
    {
      id: 4,
      title: 'Поделитесь опытом работы с маркетинговыми инструментами',
      author: 'Елена Смирнова',
      category: 'Маркетинг',
      replies: 34,
      views: 678,
      lastActivity: '2 часа назад'
    }
  ];

  const categories = ['all', 'Программирование', 'Дизайн', 'Маркетинг'];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const filteredThreads = forumCategory === 'all'
    ? forumThreads
    : forumThreads.filter(thread => thread.category === forumCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              EduSpace
            </h1>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" className="hover:bg-primary/10">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Курсы
              </Button>
              <Button variant="ghost" className="hover:bg-primary/10">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Форум
              </Button>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Учись вместе с лучшими
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Онлайн-курсы от экспертов, интерактивное обучение и активное сообщество студентов
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary hover:bg-primary/10">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>
        </div>
      </section>

      <Tabs defaultValue="courses" className="container mx-auto px-4 pb-16">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
          <TabsTrigger value="courses" className="text-lg">
            <Icon name="GraduationCap" size={20} className="mr-2" />
            Курсы
          </TabsTrigger>
          <TabsTrigger value="forum" className="text-lg">
            <Icon name="MessageSquare" size={20} className="mr-2" />
            Форум
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="animate-fade-in">
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-primary to-secondary" 
                  : "border-primary/30 hover:bg-primary/10"
                }
              >
                {category === 'all' ? 'Все курсы' : category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <Card 
                key={course.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-40 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-6xl">
                  {course.image}
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary">
                      {course.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="forum" className="animate-fade-in">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8 flex flex-wrap gap-3">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={forumCategory === category ? "default" : "outline"}
                    onClick={() => setForumCategory(category)}
                    className={forumCategory === category 
                      ? "bg-gradient-to-r from-primary to-secondary" 
                      : "border-primary/30 hover:bg-primary/10"
                    }
                  >
                    {category === 'all' ? 'Все темы' : category}
                  </Button>
                ))}
              </div>

              <div className="space-y-4">
                {filteredThreads.map((thread, index) => (
                  <Card 
                    key={thread.id} 
                    className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="border-primary/50">
                              {thread.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{thread.lastActivity}</span>
                          </div>
                          <CardTitle className="text-lg hover:text-primary transition-colors">
                            {thread.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            Автор: {thread.author}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="MessageCircle" size={16} />
                          <span>{thread.replies} ответов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Eye" size={16} />
                          <span>{thread.views} просмотров</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card className="sticky top-24 border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Plus" size={20} />
                    Создать тему
                  </CardTitle>
                  <CardDescription>
                    Задайте вопрос сообществу
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Заголовок</label>
                    <Input placeholder="О чем ваш вопрос?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Категория</label>
                    <select className="w-full px-3 py-2 border rounded-lg bg-background">
                      <option>Программирование</option>
                      <option>Дизайн</option>
                      <option>Маркетинг</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание</label>
                    <Textarea placeholder="Опишите подробнее..." rows={4} />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Опубликовать
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            EduSpace
          </h3>
          <p className="text-muted-foreground mb-6">
            Образовательная платформа нового поколения
          </p>
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Linkedin" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
