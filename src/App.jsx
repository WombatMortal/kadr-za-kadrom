import { useState } from "react";
import {
  ArrowRight,
  CalendarBlank,
  Cat,
  ChartBar,
  Check,
  Clock,
  Eye,
  EyeSlash,
  FilmStrip,
  Heart,
  LockSimple,
  PaperPlaneTilt,
  Play,
  Quotes,
  ShieldCheck,
  SignIn,
  SignOut,
  Sparkle,
  Star,
  UserCircle,
  UserPlus,
  UsersThree,
  X,
} from "@phosphor-icons/react";

const candidates = [
  {
    id: "suspiria",
    title: "Суспирия",
    meta: "реж. Л. Гуаданьино · 2018",
    country: "Италия / США",
    image: "assets/suspiria-candidate.jpg",
  },
  {
    id: "angry-men",
    title: "12 разгневанных мужчин",
    meta: "реж. С. Люмет · 1957",
    country: "США",
    image: "assets/angry-men-candidate.jpg",
  },
  {
    id: "beast",
    title: "Ученик чудовища",
    meta: "реж. Мамору Хосода · 2015",
    country: "Япония",
    image: "assets/beast-apprentice-candidate.jpg",
  },
];

const rules = [
  {
    number: "01",
    title: "Смотрим заранее",
    text: "Фильм смотрим в удобное время. На встрече остаются разговор, спор и внезапная смена оценки.",
  },
  {
    number: "02",
    title: "Воскресенье, 14:00",
    text: "Основной ритуал клуба. Если встреча переносится, решаем это вместе в чате.",
  },
  {
    number: "03",
    title: "Любое мнение имеет место",
    text: "Можно любить фильм, который все ругают. Аргументы обсуждаем, человека уважаем.",
  },
  {
    number: "04",
    title: "Слушаем друг друга",
    text: "Не перебиваем и оставляем пространство тем, кто формулирует мысль дольше остальных.",
  },
  {
    number: "05",
    title: "Предлагай — приходи",
    text: "Если выдвигаешь фильм в голосование, постарайся посмотреть его и быть на обсуждении.",
  },
  {
    number: "06",
    title: "Юмор приветствуется",
    text: "Мемы, панчи и театральные возмущения входят в программу. Унижение участников — нет.",
  },
];

const members = [
  {
    avatar: "💼",
    name: "Даша",
    role: "Соосновательница и ведущая",
    taste: "Драмы, сложные семьи и фильмы, за которые хочется спорить",
    line: "Собирает всех в воскресенье и верит в «Грозовой перевал».",
    favoriteFilm: "Зелёная миля",
    favoriteCharacter: "Бобби Аксельрод",
    pick: "Ответ участницы",
    color: "red",
  },
  {
    avatar: "✈️",
    name: "Лина",
    role: "Участница клуба",
    taste: "Жанровое кино, яркие герои и живые обсуждения",
    line: "Успевает поесть до выхода новой обложки. Обычно.",
    favoriteFilm: "Воздушная тюрьма",
    favoriteCharacter: "Сайрус Гриссом",
    pick: "Ответ участницы",
    color: "teal",
  },
  {
    avatar: "🐎",
    name: "Анна",
    role: "Разведка по релизам",
    taste: "Новинки, анимация и всё, что уже появилось в хорошем качестве",
    line: "Приносит новости раньше, чем их успевают попросить.",
    favoriteFilm: "Облачный атлас",
    favoriteCharacter: "Спирит",
    pick: "Ответ участницы",
    color: "yellow",
  },
  {
    avatar: "🌙",
    name: "Тим",
    role: "Мем-редактор",
    taste: "Провокации, меткие реплики и кино с поводом для панча",
    line: "Умеет превратить обсуждение в набор будущих цитат.",
    favoriteFilm: "Под покровом ночи",
    favoriteCharacter: "Кира Найтли",
    pick: "Ответ участника",
    color: "ink",
  },
  {
    avatar: "🦈",
    name: "Оля",
    role: "Голос клуба",
    taste: "Триллеры, неожиданные финалы и эмоциональные реакции",
    line: "Ставит опрос там, где другие ещё формулируют вопрос.",
    favoriteFilm: "Акулий торнадо",
    favoriteCharacter: "Фин Шепард",
    pick: "Случайный выбор",
    color: "blue",
  },
  {
    avatar: "🦖",
    name: "АняФ",
    role: "Культурная экспедиция",
    taste: "Аниме, фестивальные находки и странные короткометражки",
    line: "Может принести в чат рыбу, искусство и отличный фильм.",
    favoriteFilm: "Велоципастор",
    favoriteCharacter: "Даг Джонс",
    pick: "Случайный выбор",
    color: "coral",
  },
  {
    avatar: "⚔️",
    name: "Алексей",
    role: "Поставщик горячих дискуссий",
    taste: "Детективы, триллеры и кино, где можно поспорить",
    line: "Ждёт провокационную картину и заранее готовит аргументы.",
    favoriteFilm: "Человек, изменивший всё",
    favoriteCharacter: "Арагорн",
    pick: "Ответ участника",
    color: "green",
  },
  {
    avatar: "🛞",
    name: "Маша",
    role: "Эмоциональный аналитик",
    taste: "Психологическое кино, драмы и фильмы с фем-повесткой",
    line: "Разбирает мотивацию героев до последней спорной сцены.",
    favoriteFilm: "Шина",
    favoriteCharacter: "Роберт — шина-убийца",
    pick: "Случайный выбор",
    color: "purple",
  },
  {
    avatar: "🚕",
    name: "Кира",
    role: "Участница клуба",
    taste: "Кино без жанровых ограничений и точные реакции",
    line: "Может говорить редко, зато всегда по существу.",
    favoriteFilm: "Такси 1–2",
    favoriteCharacter: "Мистер Бин",
    pick: "Фильм из ответа · герой выбран случайно",
    color: "yellow",
  },
  {
    avatar: "🐈",
    name: "Дарья",
    role: "Куратор славянского кино",
    taste: "Авторское, российское и восточноевропейское кино",
    line: "Приносит фильмы, которые давно хотелось посмотреть.",
    favoriteFilm: "Кошки",
    favoriteCharacter: "Макавити",
    pick: "Случайный выбор",
    color: "coral",
  },
  {
    avatar: "🏴‍☠️",
    name: "Настя",
    role: "Участница клуба",
    taste: "Чёрные комедии, триллеры и Джеймс Макэвой",
    line: "Задаёт один вопрос, после которого начинается новый спор.",
    favoriteFilm: "Гордость и предубеждение",
    favoriteCharacter: "Монки Д. Луффи",
    pick: "Ответ участницы",
    color: "blue",
  },
  {
    avatar: "🤡",
    name: "Мари",
    role: "Участница клуба",
    taste: "Истории о людях, отношениях и неожиданных решениях",
    line: "Смотрит на героев внимательнее, чем герои друг на друга.",
    favoriteFilm: "Клоуны-убийцы из космоса",
    favoriteCharacter: "Шорти",
    pick: "Случайный выбор",
    color: "green",
  },
  {
    avatar: "🏹",
    name: "Мари Л.",
    role: "Участница клуба",
    taste: "Кино разных стран и разговоры после финальных титров",
    line: "Помогает клубу смотреть на фильмы с новой стороны.",
    favoriteFilm: "Капитан Фантастик",
    favoriteCharacter: "Амарендра Бахубали",
    pick: "Ответ участницы",
    color: "teal",
  },
  {
    avatar: "🪟",
    name: "Сергей",
    role: "Киномеханик и провокатор вопросов",
    taste: "Классика, фантастика и герои, которые спорят с системой",
    line: "Задаёт серьёзные вопросы в пятницу вечером и возвращается в титры.",
    favoriteFilm: "Окно во двор",
    favoriteCharacter: "Винсент Фриман",
    pick: "Выбор Сергея",
    color: "red",
  },
];

const ratingFilms = [
  "Белое пластиковое небо",
  "Ученик чудовища",
  "Сядь за руль",
  "Опавшие листья",
];

const clubRatings = [
  { name: "Даша", scores: [9, 8, 7, 8] },
  { name: "Лина", scores: [8, 7, 8, 9] },
  { name: "Анна", scores: [9, 9, 6, 8] },
  { name: "Тим", scores: [6, 7, 5, 7] },
  { name: "Оля", scores: [8, 8, 9, 8] },
  { name: "АняФ", scores: [7, 10, 6, 7] },
  { name: "Алексей", scores: [6, 7, 8, 6] },
  { name: "Маша", scores: [9, 8, 7, 9] },
  { name: "Кира", scores: [8, 9, 8, 8] },
  { name: "Дарья", scores: [7, 6, 9, 7] },
  { name: "Настя", scores: [8, 7, 8, 8] },
  { name: "Мари", scores: [9, 8, 9, 8] },
  { name: "Мари Л.", scores: [8, 7, 8, 9] },
  { name: "Сергей", scores: [8, 9, 7, 9] },
];

const memberAccounts = [
  { member: "Даша", login: "dasha", password: "Kadr29Dasha", meetings: 11, genre: "Драма" },
  { member: "Лина", login: "lina", password: "Kadr29Lina", meetings: 7, genre: "Боевик" },
  { member: "Анна", login: "anna", password: "Kadr29Anna", meetings: 9, genre: "Анимация" },
  { member: "Тим", login: "tim", password: "Kadr29Tim", meetings: 10, genre: "Триллер" },
  { member: "Оля", login: "olya", password: "Kadr29Olya", meetings: 8, genre: "Триллер" },
  { member: "АняФ", login: "anyaf", password: "Kadr29AnyaF", meetings: 8, genre: "Аниме" },
  { member: "Алексей", login: "alexey", password: "Kadr29Alex", meetings: 10, genre: "Детектив" },
  { member: "Маша", login: "masha", password: "Kadr29Masha", meetings: 7, genre: "Драма" },
  { member: "Кира", login: "kira", password: "Kadr29Kira", meetings: 6, genre: "Комедия" },
  { member: "Дарья", login: "daria", password: "Kadr29Daria", meetings: 9, genre: "Авторское" },
  { member: "Настя", login: "nastya", password: "Kadr29Nastya", meetings: 8, genre: "Триллер" },
  { member: "Мари", login: "mari", password: "Kadr29Mari", meetings: 6, genre: "Драма" },
  { member: "Мари Л.", login: "marie_l", password: "Kadr29Marie", meetings: 7, genre: "Артхаус" },
  { member: "Сергей", login: "sergey", password: "Kadr29Sergey", meetings: 12, genre: "Фантастика" },
];

const initialPersonalRatings = Object.fromEntries(
  memberAccounts.map((account) => {
    const rating = clubRatings.find((person) => person.name === account.member);
    return [account.login, rating?.scores[0] ?? 0];
  }),
);

const archive = [
  {
    date: "14.06",
    title: "12 разгневанных мужчин",
    image: "assets/archive-12-angry-men.jpg",
    tag: "Классика",
    note: "Четыре разгневанные девушки и один важный разговор.",
  },
  {
    date: "21.06",
    title: "Опавшие листья",
    image: "assets/archive-fallen-leaves.jpg",
    tag: "Драма",
    note: "Тишина, одиночество и очень финский способ любить.",
  },
  {
    date: "28.06",
    title: "Всё закончится на нас",
    image: "assets/archive-it-ends-with-us.jpg",
    tag: "Разбор",
    note: "Обсуждали фильм и шум вокруг его актёров.",
  },
  {
    date: "05.07",
    title: "Сядь за руль моей машины",
    image: "assets/archive-drive-my-car.jpg",
    tag: "Япония",
    note: "Три часа, Чехов и несколько стадий принятия.",
  },
  {
    date: "12.07",
    title: "Ученик чудовища",
    image: "assets/archive-beast-apprentice.jpg",
    tag: "Аниме",
    note: "Япония снова не пожелала отпускать киноклуб.",
  },
  {
    date: "19.07",
    title: "Мечты робота",
    image: "assets/archive-robot-dreams.jpg",
    tag: "Анимация",
    note: "Фильм без слов, после которого слов оказалось много.",
  },
];

const genres = ["Драма", "Комедия", "Триллер", "Анимация", "Классика", "Артхаус"];

const blankForm = {
  name: "",
  telegram: "",
  city: "",
  frequency: "Почти каждое воскресенье",
  films: "",
  defend: "",
  why: "",
  consent: false,
};

export function App() {
  const [watched, setWatched] = useState(false);
  const [attending, setAttending] = useState(false);
  const [vote, setVote] = useState("");
  const [voteOpen, setVoteOpen] = useState(false);
  const [notice, setNotice] = useState("");
  const [selectedGenres, setSelectedGenres] = useState(["Драма"]);
  const [form, setForm] = useState(blankForm);
  const [submitted, setSubmitted] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [loggedAccount, setLoggedAccount] = useState(null);
  const [accountTab, setAccountTab] = useState("ratings");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [personalRatings, setPersonalRatings] = useState(initialPersonalRatings);

  const activeMember = loggedAccount
    ? members.find((member) => member.name === loggedAccount.member)
    : null;
  const personalRating = loggedAccount ? personalRatings[loggedAccount.login] : 0;
  const selectedCandidate = candidates.find((candidate) => candidate.id === vote);

  const flash = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };

  const toggleGenre = (genre) => {
    setSelectedGenres((current) =>
      current.includes(genre)
        ? current.filter((item) => item !== genre)
        : [...current, genre],
    );
  };

  const updateForm = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitApplication = (event) => {
    event.preventDefault();
    setSubmitted(true);
    window.location.hash = "join";
  };

  const resetApplication = () => {
    setForm(blankForm);
    setSelectedGenres(["Драма"]);
    setSubmitted(false);
  };

  const submitLogin = (event) => {
    event.preventDefault();
    const cleanName = loginForm.username.trim().replace(/^@/, "").toLowerCase();
    const account = memberAccounts.find(
      (item) => item.login === cleanName && item.password === loginForm.password,
    );
    if (!account) {
      setLoginError("Логин или пароль не совпали. Проверьте таблицу доступов.");
      return;
    }
    setLoggedAccount(account);
    setLoginError("");
    setAccountTab("ratings");
  };

  const logout = () => {
    setLoggedAccount(null);
    setLoginForm({ username: "", password: "" });
    setLoginError("");
  };

  return (
    <main className="site-shell">
      <header className="masthead">
        <a className="wordmark" href="#now" aria-label="Кадр за кадром — главная">
          КАДР ЗА КАДРОМ
          <span>частный киноклуб</span>
        </a>

        <nav aria-label="Основная навигация">
          <a className="active" href="#now">Афиша</a>
          <a href="#about">О клубе</a>
          <a href="#members">Участники</a>
          <a href="#archive">Архив</a>
          <a className="join-link" href="#join">Вступить</a>
        </nav>

        <button className="account-trigger" type="button" onClick={() => setAccountOpen(true)}>
          <UserCircle size={28} weight="duotone" aria-hidden="true" />
          <span>{activeMember?.name || "Кабинет"}</span>
        </button>
      </header>

      <section className="feature-grid" id="now">
        <article className="film-copy">
          <p className="issue">Фильм недели №29</p>
          <h1>
            <span>Белое</span>
            <span className="film-title-long">пластиковое</span>
            <span>небо</span>
            <small>White Plastic Sky</small>
          </h1>
          <p className="film-meta">Реж. Тибор Баноцки, Шаролта Сабо · Венгрия / Словакия · 2023 · 111 мин</p>
          <p className="synopsis">
            В 2123 году Земля осталась без растений и животных, а людей после
            пятидесяти превращают в деревья. Стефан нарушает правила, чтобы спасти жену.
          </p>

          <button
            className={`primary-action ${watched ? "selected" : ""}`}
            type="button"
            onClick={() => {
              setWatched((current) => !current);
              flash(watched ? "Отметку убрали" : "Записали: фильм посмотрен");
            }}
            aria-pressed={watched}
          >
            <Check size={32} weight="bold" aria-hidden="true" />
            {watched ? "Посмотрено!" : "Посмотрел(а)"}
          </button>

          <div className="support-actions">
            <button
              className={attending ? "selected" : ""}
              type="button"
              onClick={() => {
                setAttending((current) => !current);
                flash(attending ? "Планы обновлены" : "Увидимся в воскресенье");
              }}
              aria-pressed={attending}
            >
              <CalendarBlank size={21} weight="bold" aria-hidden="true" />
              {attending ? "Я буду!" : "Я буду"}
            </button>
            <button type="button" onClick={() => flash("Ссылка откроется участникам перед встречей")}>
              <Play size={21} weight="fill" aria-hidden="true" />
              Войти в звонок
              <LockSimple size={16} weight="bold" aria-hidden="true" />
            </button>
          </div>
          <p className="privacy"><LockSimple size={14} weight="fill" /> Звонок только для участников клуба</p>
        </article>

        <figure className="hero-art">
          <img
            src="assets/white-plastic-sky-week.jpg"
            alt="Постер анимационного фильма «Белое пластиковое небо»"
          />
          <figcaption className="review-sticker">
            <strong>2123</strong>
            <span>Любовь после<br />конца природы</span>
          </figcaption>
          <span className="art-note">В пятьдесят — на плантацию</span>
          <div className="award-strip">
            <FilmStrip size={28} weight="duotone" aria-hidden="true" />
            <span>Berlinale 2023<br />Encounters</span>
          </div>
        </figure>

        <aside className="event-column" aria-label="Информация о встрече">
          <p className="eyebrow">Воскресенье</p>
          <p className="event-date">02.08</p>
          <p className="event-time">— 14:00</p>
          <div className="countdown">
            <span>Осталось</span>
            <p><strong>7</strong> дней</p>
            <p><strong>0</strong> часов</p>
          </div>
          <blockquote>
            «А экологическая<br />катастрофа точно<br />была в программе?»
          </blockquote>
        </aside>
      </section>

      <section className="ballot" id="vote" aria-labelledby="ballot-title">
        <div className="ballot-copy">
          <span className="ballot-kicker">Следующий фильм · до 22:00</span>
          <h2 id="ballot-title">Выбираем<br />вместе</h2>
          <p>
            Три фильма, один голос и достаточно места, чтобы прочитать
            каждое название.
          </p>
        </div>

        <div className="ballot-action">
          <div className="ballot-count">
            <strong>3</strong>
            <span>кандидата</span>
          </div>
          <div className="ballot-selection">
            <span>{selectedCandidate ? "Ваш выбор" : "Голос ещё не выбран"}</span>
            <strong>{selectedCandidate?.title || "Открыть список фильмов"}</strong>
          </div>
          <button type="button" onClick={() => setVoteOpen(true)}>
            {selectedCandidate ? "Изменить голос" : "Голосовать"}
            <ArrowRight size={24} weight="bold" />
          </button>
        </div>

        <aside className="ballot-poster-note">
          <span>Один участник</span>
          <strong>Один голос</strong>
          <span>Результат в чате</span>
        </aside>
      </section>

      <section className="about-section" id="about">
        <div className="section-kicker">
          <span>Киноклуб в двух словах</span>
          <Quotes size={44} weight="fill" aria-hidden="true" />
        </div>
        <div className="about-lead">
          <p>Смотрим отдельно.</p>
          <p>Спорим вместе.</p>
        </div>
        <div className="about-copy">
          <p>
            «Кадр за кадром» — еженедельная онлайн-встреча людей, которым
            мало поставить фильму оценку. Мы обсуждаем героев, режиссуру,
            личный опыт и иногда два часа выясняем, кто всё понял неправильно.
          </p>
          <div className="club-stats" aria-label="Киноклуб в цифрах">
            <div><strong>6</strong><span>месяцев вместе</span></div>
            <div><strong>14</strong><span>анкет участников</span></div>
            <div><strong>14:00</strong><span>каждое воскресенье</span></div>
          </div>
        </div>
      </section>

      <section className="rules-section" aria-labelledby="rules-title">
        <header className="section-heading">
          <div>
            <span className="section-number">/ 01</span>
            <h2 id="rules-title">Правила клуба</h2>
          </div>
          <p>Safe space для мнений, взглядов и хороших шуток.</p>
        </header>
        <div className="rules-grid">
          {rules.map((rule) => (
            <article className="rule" key={rule.number}>
              <span>{rule.number}</span>
              <h3>{rule.title}</h3>
              <p>{rule.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="members-section" id="members" aria-labelledby="members-title">
        <header className="section-heading inverted-heading">
          <div>
            <span className="section-number">/ 02</span>
            <h2 id="members-title">Участники</h2>
          </div>
          <p>У каждого свой вкус. Именно поэтому звонки идут по два часа.</p>
        </header>
        <div className="members-grid">
          {members.map((member) => (
            <article className="member-card" key={`${member.name}-${member.role}`}>
              <div
                className={`member-mark ${member.color}`}
                role="img"
                aria-label={`Тематическая аватарка: ${member.favoriteFilm} и ${member.favoriteCharacter}`}
              >
                {member.avatar}
              </div>
              <div className="member-topline">
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>
              <p className="member-taste">{member.taste}</p>
              <dl className="member-picks">
                <div>
                  <dt>Фильм</dt>
                  <dd>{member.favoriteFilm}</dd>
                </div>
                <div>
                  <dt>Персонаж</dt>
                  <dd>{member.favoriteCharacter}</dd>
                </div>
              </dl>
              <span className={`member-pick-source ${member.pick.includes("Случай") || member.pick.includes("случайно") ? "random" : ""}`}>
                {member.pick}
              </span>
              <p className="member-line">{member.line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="archive-section" id="archive" aria-labelledby="archive-title">
        <header className="section-heading">
          <div>
            <span className="section-number">/ 03</span>
            <h2 id="archive-title">Кинохроника</h2>
          </div>
          <p>Обложки, фильмы и то, что осталось после обсуждений.</p>
        </header>
        <div className="archive-grid">
          {archive.map((item) => (
            <article className="archive-card" key={item.date}>
              <div className="archive-image">
                <img src={item.image} alt={`Обложка обсуждения фильма «${item.title}»`} />
                <span>{item.date}</span>
              </div>
              <div className="archive-card-copy">
                <span>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
        <button className="archive-more" type="button" onClick={() => flash("Полный архив появится в следующей версии")}>
          Все обсуждения <ArrowRight size={24} weight="bold" />
        </button>
      </section>

      <section className="join-section" id="join" aria-labelledby="join-title">
        <div className="join-intro">
          <span className="section-number">/ 04</span>
          <h2 id="join-title">Хочу<br />в клуб</h2>
          <p>
            Ищем людей, которые готовы смотреть кино, приходить на обсуждения
            и уважать чужую любовь к сомнительным фильмам.
          </p>
          <div className="join-facts">
            <p><Clock size={23} weight="bold" /> Воскресенье · 14:00 МСК</p>
            <p><UsersThree size={23} weight="bold" /> Онлайн · камерная группа</p>
            <p><Heart size={23} weight="fill" /> Вступление бесплатное</p>
          </div>
        </div>

        <div className="application-panel">
          {submitted ? (
            <div className="application-success" role="status">
              <Sparkle size={54} weight="fill" aria-hidden="true" />
              <p className="success-kicker">Заявка готова</p>
              <h3>{form.name}, добро пожаловать в титры!</h3>
              <p>
                Анкета собрана. В прототипе она хранится только на этом экране;
                при публикации подключим отправку организаторам.
              </p>
              <div className="application-summary">
                <span>Телеграм: {form.telegram}</span>
                <span>Жанры: {selectedGenres.join(", ") || "без жанровых рамок"}</span>
                <span>Готовность: {form.frequency}</span>
              </div>
              <button type="button" onClick={resetApplication}>Заполнить заново</button>
            </div>
          ) : (
            <form onSubmit={submitApplication}>
              <div className="form-heading">
                <UserPlus size={34} weight="duotone" aria-hidden="true" />
                <div>
                  <p>Анкета будущего участника</p>
                  <span>Обычно занимает 3–5 минут</span>
                </div>
              </div>

              <div className="form-row">
                <label>
                  Как вас зовут?
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={updateForm}
                    placeholder="Имя"
                    autoComplete="name"
                  />
                </label>
                <label>
                  Телеграм
                  <input
                    required
                    name="telegram"
                    value={form.telegram}
                    onChange={updateForm}
                    placeholder="@username"
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="form-row">
                <label>
                  Город и часовой пояс
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={updateForm}
                    placeholder="Москва, МСК"
                    autoComplete="address-level2"
                  />
                </label>
                <label>
                  Как часто сможете приходить?
                  <select name="frequency" value={form.frequency} onChange={updateForm}>
                    <option>Почти каждое воскресенье</option>
                    <option>Два-три раза в месяц</option>
                    <option>Раз в месяц</option>
                    <option>Пока присматриваюсь</option>
                  </select>
                </label>
              </div>

              <fieldset>
                <legend>Что любите смотреть?</legend>
                <div className="genre-picker">
                  {genres.map((genre) => (
                    <button
                      type="button"
                      className={selectedGenres.includes(genre) ? "selected" : ""}
                      onClick={() => toggleGenre(genre)}
                      aria-pressed={selectedGenres.includes(genre)}
                      key={genre}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label>
                Три фильма, по которым вас можно узнать
                <textarea
                  required
                  name="films"
                  value={form.films}
                  onChange={updateForm}
                  placeholder="Например: «Прошлые жизни», «Шрек 2», «Суспирия»"
                  rows="3"
                />
              </label>

              <label>
                Какой фильм вы готовы защищать перед всем клубом?
                <input
                  required
                  name="defend"
                  value={form.defend}
                  onChange={updateForm}
                  placeholder="Самый спорный вариант приветствуется"
                />
              </label>

              <label>
                Зачем вам киноклуб?
                <textarea
                  required
                  name="why"
                  value={form.why}
                  onChange={updateForm}
                  placeholder="Несколько честных предложений"
                  rows="4"
                />
              </label>

              <label className="consent">
                <input
                  required
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={updateForm}
                />
                <span>Я прочитал(а) правила и готов(а) уважать чужие мнения.</span>
              </label>

              <button className="submit-application" type="submit">
                <PaperPlaneTilt size={25} weight="fill" />
                Отправить заявку
              </button>
              <p className="form-note">
                <ShieldCheck size={17} weight="fill" />
                Для рабочей версии подключим приватную отправку организаторам.
              </p>
            </form>
          )}
        </div>
      </section>

      <footer>
        <a className="footer-wordmark" href="#now">Кадр за кадром</a>
        <p>Частный онлайн-киноклуб · 2026</p>
        <a href="#join">Вступить в клуб <ArrowRight size={18} weight="bold" /></a>
      </footer>

      {voteOpen && (
        <div
          className="vote-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setVoteOpen(false);
          }}
        >
          <section
            className="vote-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="vote-modal-title"
          >
            <header className="vote-modal-header">
              <div>
                <span>Следующий фильм · до 22:00</span>
                <h2 id="vote-modal-title">Голосование</h2>
              </div>
              <button type="button" onClick={() => setVoteOpen(false)} aria-label="Закрыть голосование">
                <X size={30} weight="bold" />
              </button>
            </header>

            <div className="candidate-list">
              {candidates.map((candidate) => (
                <label className={`candidate ${vote === candidate.id ? "chosen" : ""}`} key={candidate.id}>
                  <img src={candidate.image} alt="" />
                  <span className="candidate-copy">
                    <strong>{candidate.title}</strong>
                    <small>{candidate.meta}<br />{candidate.country}</small>
                  </span>
                  <input
                    type="radio"
                    name="candidate"
                    value={candidate.id}
                    checked={vote === candidate.id}
                    onChange={() => {
                      setVote(candidate.id);
                      flash(`Голос за «${candidate.title}» принят`);
                    }}
                  />
                  <span className="radio-mark" aria-hidden="true"></span>
                </label>
              ))}
            </div>

            <footer className="vote-modal-footer">
              <p>
                {selectedCandidate
                  ? `Вы выбрали «${selectedCandidate.title}».`
                  : "Выберите один фильм — голос можно изменить."}
              </p>
              <button type="button" onClick={() => setVoteOpen(false)} disabled={!vote}>
                Готово <Check size={22} weight="bold" />
              </button>
            </footer>
          </section>
        </div>
      )}

      {accountOpen && (
        <div
          className="account-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setAccountOpen(false);
          }}
        >
          <section
            className="account-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="account-title"
          >
            <header className="account-modal-header">
              <div>
                <span>Закрытый раздел</span>
                <h2 id="account-title">Личный кабинет</h2>
              </div>
              <button type="button" onClick={() => setAccountOpen(false)} aria-label="Закрыть кабинет">
                <X size={30} weight="bold" />
              </button>
            </header>

            {!loggedAccount ? (
              <div className="login-layout">
                <div className="login-intro">
                  <Cat size={62} weight="duotone" aria-hidden="true" />
                  <h3>Свои оценки.<br />Чужие споры.</h3>
                  <p>
                    В кабинете участники оценивают фильм недели, смотрят оценки
                    остальных и вспоминают, с кем снова придётся спорить.
                  </p>
                  <div className="login-feature">
                    <ChartBar size={24} weight="bold" />
                    Таблица оценок после каждой встречи
                  </div>
                </div>

                <form className="login-form" onSubmit={submitLogin}>
                  <div className="login-form-heading">
                    <SignIn size={32} weight="duotone" />
                    <div>
                      <h3>Войти в клуб</h3>
                      <p>У каждого участника свой демо-доступ</p>
                    </div>
                  </div>

                  <label>
                    Логин участника
                    <input
                      required
                      name="username"
                      value={loginForm.username}
                      onChange={(event) => {
                        setLoginForm((current) => ({ ...current, username: event.target.value }));
                        setLoginError("");
                      }}
                      placeholder="например, dasha"
                      autoComplete="username"
                    />
                  </label>

                  <label>
                    Пароль
                    <span className="password-field">
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={loginForm.password}
                        onChange={(event) => {
                          setLoginForm((current) => ({ ...current, password: event.target.value }));
                          setLoginError("");
                        }}
                        placeholder="Пароль из таблицы доступов"
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                      >
                        {showPassword ? <EyeSlash size={22} /> : <Eye size={22} />}
                      </button>
                    </span>
                  </label>

                  {loginError && <p className="login-error" role="alert">{loginError}</p>}

                  <button className="login-submit" type="submit">
                    Войти в кабинет <ArrowRight size={22} weight="bold" />
                  </button>

                  <p className="auth-note">
                    <ShieldCheck size={19} weight="fill" />
                    Это демо-доступы для прототипа. Они не защищают реальные
                    данные и не используются в других сервисах.
                  </p>
                </form>
              </div>
            ) : (
              <div className="account-dashboard">
                <div className="account-toolbar">
                  <div className="account-identity">
                    <div role="img" aria-label={`Аватар ${activeMember?.name}`}>
                      {activeMember?.avatar}
                    </div>
                    <span>
                      <strong>{activeMember?.name}</strong>
                      @{loggedAccount.login} · {activeMember?.role}
                    </span>
                  </div>
                  <button type="button" onClick={logout}>
                    <SignOut size={20} weight="bold" /> Выйти
                  </button>
                </div>

                <nav className="account-tabs" aria-label="Разделы личного кабинета">
                  <button
                    type="button"
                    className={accountTab === "ratings" ? "active" : ""}
                    onClick={() => setAccountTab("ratings")}
                  >
                    Оценки клуба
                  </button>
                  <button
                    type="button"
                    className={accountTab === "profile" ? "active" : ""}
                    onClick={() => setAccountTab("profile")}
                  >
                    Мой профиль
                  </button>
                </nav>

                {accountTab === "ratings" ? (
                  <div className="ratings-view">
                    <div className="cabinet-heading">
                      <div>
                        <span>После обсуждений</span>
                        <h3>Кто сколько поставил</h3>
                      </div>
                      <p className="demo-badge">Демоданные</p>
                    </div>

                    <div className="ratings-summary">
                      <div><strong>8,1</strong><span>средняя оценка недели</span></div>
                      <div><strong>14</strong><span>участников оценили</span></div>
                      <div><strong>4</strong><span>фильма в сравнении</span></div>
                    </div>

                    <div className="ratings-table-wrap">
                      <table className="ratings-table">
                        <thead>
                          <tr>
                            <th>Участник</th>
                            {ratingFilms.map((film) => <th key={film}>{film}</th>)}
                            <th>Средняя</th>
                          </tr>
                        </thead>
                        <tbody>
                          {clubRatings.map((person) => {
                            const scores = person.name === loggedAccount.member
                              ? [personalRating, ...person.scores.slice(1)]
                              : person.scores;
                            const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
                            return (
                              <tr
                                className={person.name === loggedAccount.member ? "your-rating-row" : ""}
                                key={person.name}
                              >
                                <th scope="row">
                                  {person.name}
                                  {person.name === loggedAccount.member && <small>Вы</small>}
                                </th>
                                {scores.map((score, index) => (
                                  <td key={`${person.name}-${ratingFilms[index]}`}>
                                    <span className={score >= 9 ? "high-score" : score <= 6 ? "low-score" : ""}>
                                      {score}
                                    </span>
                                  </td>
                                ))}
                                <td><strong>{average.toFixed(1).replace(".", ",")}</strong></td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div className="profile-view">
                    <div className="cabinet-heading">
                      <div>
                        <span>Фильм недели</span>
                        <h3>Белое пластиковое небо</h3>
                      </div>
                      <Star size={42} weight="duotone" />
                    </div>

                    <div className="profile-grid">
                      <section className="rate-current">
                        <p>Ваша оценка</p>
                        <strong>{personalRating || "—"}<small>/10</small></strong>
                        <div className="rating-picker" aria-label="Оценить фильм от 1 до 10">
                          {Array.from({ length: 10 }, (_, index) => index + 1).map((score) => (
                            <button
                              type="button"
                              className={personalRating === score ? "selected" : ""}
                              onClick={() => setPersonalRatings((current) => ({
                                ...current,
                                [loggedAccount.login]: score,
                              }))}
                              aria-pressed={personalRating === score}
                              key={score}
                            >
                              {score}
                            </button>
                          ))}
                        </div>
                        <span>Оценку можно изменить после обсуждения.</span>
                      </section>

                      <section className="profile-stats">
                        <div><strong>{loggedAccount.meetings}</strong><span>встреч посещено</span></div>
                        <div><strong>4</strong><span>фильма оценено</span></div>
                        <div><strong>{loggedAccount.genre}</strong><span>любимый жанр</span></div>
                        <div><strong>02.08</strong><span>следующая встреча</span></div>
                      </section>
                    </div>

                    <section className="profile-favorites" aria-label="Любимые фильм и персонаж">
                      <div>
                        <span>Любимый фильм</span>
                        <strong>{activeMember?.favoriteFilm}</strong>
                      </div>
                      <div>
                        <span>Любимый персонаж</span>
                        <strong>{activeMember?.favoriteCharacter}</strong>
                      </div>
                    </section>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
      )}

      <div className={`toast ${notice ? "visible" : ""}`} role="status" aria-live="polite">
        {notice}
      </div>
    </main>
  );
}
