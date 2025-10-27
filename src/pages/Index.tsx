import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Topic {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  progress: number;
  tasksCount: number;
}

interface Question {
  id: number;
  type: string;
  question: string;
  options?: string[];
  correctAnswer: number | string;
  userAnswer?: number | string;
}

const Index = () => {
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number | string>>({});
  const [showResults, setShowResults] = useState(false);

  const topics: Topic[] = [
    {
      id: 1,
      title: 'Человек и общество',
      description: 'Биологическое и социальное в человеке. Личность. Деятельность человека и её основные формы',
      completed: false,
      progress: 65,
      tasksCount: 24
    },
    {
      id: 2,
      title: 'Сфера духовной культуры',
      description: 'Культура, наука, образование, религия, мораль. Искусство и его виды',
      completed: false,
      progress: 40,
      tasksCount: 20
    },
    {
      id: 3,
      title: 'Экономика',
      description: 'Экономика и её роль. Собственность. Рынок. Производство. Предпринимательство. Деньги',
      completed: false,
      progress: 30,
      tasksCount: 28
    },
    {
      id: 4,
      title: 'Социальная сфера',
      description: 'Социальная структура. Семья. Социальный конфликт. Межнациональные отношения',
      completed: false,
      progress: 55,
      tasksCount: 22
    },
    {
      id: 5,
      title: 'Политика',
      description: 'Власть. Государство. Политические режимы. Гражданское общество. Выборы',
      completed: false,
      progress: 20,
      tasksCount: 26
    },
    {
      id: 6,
      title: 'Право',
      description: 'Право и его роль. Конституция РФ. Права человека. Гражданское, семейное, трудовое право',
      completed: false,
      progress: 15,
      tasksCount: 30
    }
  ];

  const questions: Question[] = [
    {
      id: 1,
      type: 'Выбор ответа',
      question: 'К биологическим потребностям человека относится потребность в:',
      options: [
        'самореализации',
        'питании',
        'общении',
        'познании'
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      type: 'Выбор ответа',
      question: 'Верны ли следующие суждения о личности? А. Личность формируется во взаимодействии с другими людьми. Б. Личность формируется на протяжении всей жизни человека.',
      options: [
        'верно только А',
        'верно только Б',
        'верны оба суждения',
        'оба суждения неверны'
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      type: 'Соответствие',
      question: 'Установите соответствие между примерами и видами потребностей: к каждому элементу первого столбца подберите соответствующий элемент из второго столбца.',
      options: [
        'А) потребность в пище - 1) биологические',
        'Б) потребность в общении - 2) социальные',
        'В) потребность в познании - 3) духовные',
        'Г) потребность во сне - 1) биологические'
      ],
      correctAnswer: '1231'
    }
  ];

  const totalProgress = Math.round(
    topics.reduce((sum, topic) => sum + topic.progress, 0) / topics.length
  );

  const handleAnswerSelect = (questionId: number, answer: number) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const correctAnswersCount = Object.entries(userAnswers).filter(
    ([qId, answer]) => {
      const question = questions.find(q => q.id === parseInt(qId));
      return question?.correctAnswer === answer;
    }
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-primary/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">ОГЭ.Обществознание</h1>
                <p className="text-xs text-muted-foreground">Твой путь к высокому баллу</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-muted px-4 py-2 rounded-full">
                <Icon name="Target" size={18} className="text-primary" />
                <span className="text-sm font-semibold">Прогресс: {totalProgress}%</span>
              </div>
              <Button variant="outline" className="border-primary/30">
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-12 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-2 border-primary/20 animate-fade-in">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="BookOpen" size={32} className="text-primary" />
                  <Badge className="bg-primary">Теория</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-1">6</p>
                <p className="text-sm text-muted-foreground">тем для изучения</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="CheckCircle2" size={32} className="text-secondary" />
                  <Badge className="bg-secondary">Практика</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-1">150+</p>
                <p className="text-sm text-muted-foreground">заданий для тренировки</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <Icon name="TrendingUp" size={32} className="text-accent" />
                  <Badge className="bg-accent">Готовность</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-1">{totalProgress}%</p>
                <p className="text-sm text-muted-foreground">общий прогресс</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Tabs defaultValue="topics" className="container mx-auto px-4 pb-16">
        <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="topics" className="text-base">
            <Icon name="Library" size={18} className="mr-2" />
            Темы ОГЭ
          </TabsTrigger>
          <TabsTrigger value="practice" className="text-base">
            <Icon name="Dumbbell" size={18} className="mr-2" />
            Тренажер
          </TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-3">Все темы курса</h2>
              <p className="text-muted-foreground">Изучай темы последовательно и выполняй задания для закрепления</p>
            </div>

            <div className="grid gap-4">
              {topics.map((topic, index) => (
                <Card 
                  key={topic.id}
                  className="hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/30 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-xl font-bold text-primary">{topic.id}</span>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                          <CardDescription className="theory-text">{topic.description}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-primary/50">
                        {topic.tasksCount} заданий
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Прогресс изучения</span>
                        <span className="font-semibold text-primary">{topic.progress}%</span>
                      </div>
                      <Progress value={topic.progress} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="practice" className="animate-fade-in">
          <div className="max-w-3xl mx-auto">
            {!showResults ? (
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary">
                      Вопрос {currentQuestion + 1} из {questions.length}
                    </Badge>
                    <Badge variant="outline" className="border-secondary">
                      {questions[currentQuestion].type}
                    </Badge>
                  </div>
                  <Progress 
                    value={((currentQuestion + 1) / questions.length) * 100} 
                    className="mb-4"
                  />
                  <CardTitle className="text-2xl theory-text leading-relaxed">
                    {questions[currentQuestion].question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {questions[currentQuestion].options?.map((option, index) => (
                    <Card
                      key={index}
                      className={`cursor-pointer transition-all duration-200 hover:border-primary/50 ${
                        userAnswers[questions[currentQuestion].id] === index
                          ? 'border-2 border-primary bg-primary/5'
                          : 'border-2 border-transparent'
                      }`}
                      onClick={() => handleAnswerSelect(questions[currentQuestion].id, index)}
                    >
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          userAnswers[questions[currentQuestion].id] === index
                            ? 'border-primary bg-primary text-white'
                            : 'border-muted-foreground/30'
                        }`}>
                          {index + 1}
                        </div>
                        <span className="text-base">{option}</span>
                      </CardContent>
                    </Card>
                  ))}

                  <div className="flex justify-between pt-6">
                    <Button
                      variant="outline"
                      disabled={currentQuestion === 0}
                      onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                      <Icon name="ChevronLeft" size={18} className="mr-2" />
                      Назад
                    </Button>
                    <Button
                      onClick={handleNextQuestion}
                      disabled={!userAnswers[questions[currentQuestion].id]}
                      className="bg-gradient-to-r from-primary to-secondary"
                    >
                      {currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее'}
                      <Icon name="ChevronRight" size={18} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Trophy" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-3xl mb-2">Тест завершен!</CardTitle>
                  <CardDescription className="text-lg">
                    Правильных ответов: {correctAnswersCount} из {questions.length}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-6 text-center">
                      <p className="text-5xl font-bold text-primary mb-2">
                        {Math.round((correctAnswersCount / questions.length) * 100)}%
                      </p>
                      <p className="text-muted-foreground">Твой результат</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Button 
                        onClick={() => {
                          setCurrentQuestion(0);
                          setUserAnswers({});
                          setShowResults(false);
                        }}
                        className="bg-gradient-to-r from-primary to-secondary"
                      >
                        <Icon name="RotateCcw" size={18} className="mr-2" />
                        Пройти еще раз
                      </Button>
                      <Button variant="outline" className="border-primary/30">
                        <Icon name="BookMarked" size={18} className="mr-2" />
                        Разбор заданий
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="mt-6 border-2 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Lightbulb" size={20} className="text-accent" />
                  Совет для подготовки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground theory-text">
                  Для успешной сдачи ОГЭ рекомендуется решать минимум 10 заданий каждый день. 
                  Обращай внимание на типичные ошибки и повторяй темы, которые вызывают сложности.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <footer className="bg-gradient-to-r from-primary/5 to-secondary/5 py-12 mt-16 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">ОГЭ.Обществознание</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Платформа для эффективной подготовки к ОГЭ по обществознанию
          </p>
          <div className="flex gap-4 justify-center text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">О проекте</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Поддержка</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
