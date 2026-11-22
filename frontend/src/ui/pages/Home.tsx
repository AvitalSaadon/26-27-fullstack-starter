import { Button } from '@/shadcn/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shadcn/components/ui/card';
import {
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Linkedin,
  Github,
  Trophy,
  Users,
  Cpu,
  Server,
  Container,
  Brain,
} from 'lucide-react';
import { motion } from 'motion/react';

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const SKILL_CATEGORIES = [
  {
    label: 'Frontend',
    icon: Code2,
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
    skills: ['React', 'TypeScript'],
  },
  {
    label: 'Backend',
    icon: Server,
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    skills: ['Node.js', 'Express', 'Socket.IO', 'PostgreSQL'],
  },
  {
    label: 'DevOps',
    icon: Container,
    color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
    skills: ['Linux', 'Nginx', 'Docker', 'GitHub Actions'],
  },
  {
    label: 'Exploring',
    icon: Brain,
    color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
    skills: ['LangChain', 'LangGraph'],
  },
] as const;

const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: 'Full-Stack Developer at Carteav',
    period: 'Jul 2024 — Present',
    description:
      'Building scalable, real-time systems for autonomous vehicle technology with clean architecture and SOLID principles.',
  },
  {
    icon: Trophy,
    title: '1st Place — Colman Dev Club Competition',
    period: '2024',
    description:
      'Won the annual project competition with "Spealish" — an interactive platform for learning English through real-time multiplayer games powered by Socket.IO.',
  },
  {
    icon: Users,
    title: 'Mentor at ColmanDevClub',
    period: 'Ongoing',
    description:
      'Delivering technical lectures on frontend and backend concepts, helping fellow students level up their development skills.',
  },
] as const;

export function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-20 px-6 py-16 sm:py-24">
      {/* ─── Hero ─── */}
      <motion.section
        className="flex flex-col items-center gap-6 text-center"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={FADE_UP}
          custom={0}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-sm text-muted-foreground"
        >
          <Cpu className="size-4" />
          Available for collaboration
        </motion.div>

        <motion.h1
          variants={FADE_UP}
          custom={1}
          className="bg-linear-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
        >
          Itay Aknin
        </motion.h1>

        <motion.p
          variants={FADE_UP}
          custom={2}
          className="max-w-lg text-lg text-muted-foreground sm:text-xl"
        >
          Full-Stack Real-Time Developer crafting scalable systems with clean
          architecture & exploring the frontier of AI.
        </motion.p>

        <motion.div variants={FADE_UP} custom={3} className="flex gap-3">
          <Button asChild>
            <a
              href="https://linkedin.com/in/itay-aknin"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" />
              LinkedIn
              <ExternalLink className="size-3 opacity-50" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a
              href="https://github.com/itay-aknin"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.section>

      {/* ─── About ─── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={FADE_UP} custom={0}>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
              <p>
                I'm a 3rd-year Computer Science student at{' '}
                <span className="font-medium text-foreground">
                  Colman — The College of Management Academic Studies
                </span>{' '}
                and a full-stack developer at{' '}
                <span className="font-medium text-foreground">Carteav</span>,
                where I build real-time systems for autonomous vehicle
                technology.
              </p>
              <p>
                I specialize in{' '}
                <span className="font-medium text-foreground">
                  React, TypeScript, Node.js & Socket.IO
                </span>{' '}
                and follow clean architecture principles with a strong focus on
                reliability and performance. Currently diving deep into AI
                development — experimenting with LangChain & LangGraph for
                orchestration, vector embeddings, and reasoning patterns like
                ReAct.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* ─── Tech Stack ─── */}
      <motion.section
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={FADE_UP}
          custom={0}
          className="text-center text-2xl font-semibold tracking-tight"
        >
          Tech Stack
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div key={cat.label} variants={FADE_UP} custom={i + 1}>
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardDescription className="flex items-center gap-2">
                    <cat.icon className="size-4" />
                    {cat.label}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${cat.color}`}
                    >
                      {skill}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Highlights ─── */}
      <motion.section
        className="flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2
          variants={FADE_UP}
          custom={0}
          className="text-center text-2xl font-semibold tracking-tight"
        >
          Highlights
        </motion.h2>

        <div className="flex flex-col gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div key={item.title} variants={FADE_UP} custom={i + 1}>
              <Card className="transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <item.icon className="size-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <CardDescription>{item.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Footer ─── */}
      <motion.footer
        className="border-t border-border pt-8 text-center text-sm text-muted-foreground"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          variants={FADE_UP}
          custom={0}
          className="flex flex-col items-center gap-2"
        >
          <GraduationCap className="size-5 opacity-60" />
          <p>
            3rd-year CS student @ Colman &middot; Full-Stack Developer @ Carteav
          </p>
        </motion.div>
      </motion.footer>
    </div>
  );
}
