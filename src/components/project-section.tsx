// components/sections/ProjectsSection.tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with Next.js and Stripe integration.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    github: 'https://github.com/Codefreak69/ecom-store',
    demo: '#',
    image: '/ecom-site.jpg'
  },
  {
    title: 'Email & Sms App',
    description:
      'A web app that sends emails and SMS messages to users using Nodemailer and Twilio.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Nodemailer',
      'Neon Db'
    ],
    github: 'https://github.com/Codefreak69/email-sms-app',
    demo: 'https://www.autoscontrol.fr',
    image: '/email-sms.png'
  },
  {
    title: 'Dank GC',
    description: 'Realtime Group chat messaging web app .',
    technologies: ['Next.js', 'TypeScript', 'Websocket', 'Firebase'],
    github: 'https://github.com/Codefreak69/dank-gc',
    demo: 'https://dank-gc.vercel.app/',
    image: 'dank-gc.png'
  },
  {
    title: 'Verbatim API',
    description: 'Api which shows similarity bewtween words using openAI .',
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma', 'Postgres'],
    github: 'https://github.com/Codefreak69/dank-gc',
    demo: 'https://dank-gc.vercel.app/',
    image: '/verbatim.png'
  }
  // Add more projects as needed
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          <motion.div variants={cardVariants} className="text-center">
            <h2 className="text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map(project => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
