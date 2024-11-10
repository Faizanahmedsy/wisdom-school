import { Course } from "../courses.types";

export const courses: Course[] = [
  {
    id: "personal-finance",
    title: "Personal Finance",
    description:
      "Master budgeting, saving, investments, and understanding taxes.",
    icon: "BanknoteIcon",
    videoId: "RdVyjKRxZfs?si=k67QQthlR6JQ3Kmf",
    color: "bg-emerald-500",
    quiz: [
      {
        id: "pf1",
        text: "What is the first step in creating a budget?",
        options: [
          "Start spending less",
          "Track your income and expenses",
          "Open a savings account",
          "Pay off debt",
        ],
        correctAnswer: 1,
      },
      {
        id: "pf2",
        text: "Which investment typically offers the highest potential returns over the long term?",
        options: [
          "Savings accounts",
          "Bonds",
          "Stocks",
          "Certificates of deposit",
        ],
        correctAnswer: 2,
      },
      {
        id: "pf3",
        text: "What is compound interest?",
        options: [
          "Interest earned only on the principal",
          "Interest earned on both principal and accumulated interest",
          "A fixed interest rate that never changes",
          "Interest paid to lenders",
        ],
        correctAnswer: 1,
      },
    ],
    certificateTemplate: "finance",
  },
  {
    id: "mental-health",
    title: "Mental Health",
    description:
      "Learn about building resilience, stress management, and coping mechanisms.",
    icon: "Brain",
    videoId: "3QIfkeA6HBY",
    color: "bg-purple-500",
    quiz: [
      {
        id: "mh1",
        text: "What is a healthy way to cope with stress?",
        options: [
          "Avoiding the situation",
          "Regular exercise and meditation",
          "Suppressing emotions",
          "Working longer hours",
        ],
        correctAnswer: 1,
      },
      {
        id: "mh2",
        text: "Which is a sign of good emotional regulation?",
        options: [
          "Never feeling negative emotions",
          "Being able to identify and express feelings appropriately",
          "Always staying positive",
          "Avoiding conflict at all costs",
        ],
        correctAnswer: 1,
      },
      {
        id: "mh3",
        text: "What is mindfulness?",
        options: [
          "Thinking about the future",
          "Focusing on past experiences",
          "Being present in the moment without judgment",
          "Avoiding negative thoughts",
        ],
        correctAnswer: 2,
      },
    ],
    certificateTemplate: "mental-health",
  },
  {
    id: "productivity",
    title: "Productivity & Time Management",
    description: "Master goal setting, prioritizing, and maintaining focus.",
    icon: "Clock",
    videoId: "75d_29QWELk?si=DzCMD1LgO0_pkiUu",
    color: "bg-blue-500",
    quiz: [
      {
        id: "pm1",
        text: "What is the Pomodoro Technique?",
        options: [
          "A cooking method",
          "A time management method using 25-minute work intervals",
          "A goal-setting framework",
          "A meditation practice",
        ],
        correctAnswer: 1,
      },
      {
        id: "pm2",
        text: "Which is a characteristic of a SMART goal?",
        options: ["Subjective", "Measurable", "Ambitious", "Theoretical"],
        correctAnswer: 1,
      },
      {
        id: "pm3",
        text: "What is the best way to handle multiple priorities?",
        options: [
          "Multitasking",
          "Working longer hours",
          "Prioritizing and focusing on one task at a time",
          "Delegating everything",
        ],
        correctAnswer: 2,
      },
    ],
    certificateTemplate: "productivity",
  },
  {
    id: "basic-law",
    title: "Basic Law",
    description:
      "Understand legal rights, consumer protection, and fundamental laws.",
    icon: "Scale",
    videoId: "K65DEXrR9As?si=zw_4RwmBekYvg0Hj",
    color: "bg-red-500",
    quiz: [
      {
        id: "bl1",
        text: "What is a contract?",
        options: [
          "A verbal agreement",
          "A legally binding agreement between parties",
          "A written document",
          "A promise",
        ],
        correctAnswer: 1,
      },
      {
        id: "bl2",
        text: "What are consumer rights?",
        options: [
          "Rights only available to businesses",
          "Protections for buyers of goods and services",
          "Employee rights",
          "Government regulations",
        ],
        correctAnswer: 1,
      },
      {
        id: "bl3",
        text: "What is intellectual property?",
        options: [
          "Physical property",
          "Real estate",
          "Creations of the mind",
          "Business assets",
        ],
        correctAnswer: 2,
      },
    ],
    certificateTemplate: "law",
  },
  {
    id: "digital-literacy",
    title: "Digital Literacy",
    description:
      "Learn about internet safety, cybersecurity, and online privacy.",
    icon: "Shield",
    videoId:
      "videoseries?si=Xjw-ktc_V3Z544Cv&amp;list=PLcetZ6gSk9682A7ZAZq2s9IqB-y8Ng63e",
    color: "bg-amber-500",
    quiz: [
      {
        id: "dl1",
        text: "What is a strong password?",
        options: [
          "Your birthday",
          "A combination of letters, numbers, and special characters",
          "Your pet's name",
          "The word 'password'",
        ],
        correctAnswer: 1,
      },
      {
        id: "dl2",
        text: "What is phishing?",
        options: [
          "A fishing technique",
          "A cybersecurity attack that tricks users into revealing information",
          "A computer virus",
          "A type of software",
        ],
        correctAnswer: 1,
      },
      {
        id: "dl3",
        text: "What is two-factor authentication?",
        options: [
          "Using two passwords",
          "Using two devices",
          "A security process requiring two different forms of identification",
          "Having two email addresses",
        ],
        correctAnswer: 2,
      },
    ],
    certificateTemplate: "digital",
  },
  {
    id: "first-aid",
    title: "First Aid",
    description: "Master essential emergency skills everyone should know.",
    icon: "Heart",
    videoId: "mNk0mZRJBV0?si=t2ZSWF5K_NvSQ283",
    color: "bg-rose-500",
    quiz: [
      {
        id: "fa1",
        text: "What is the first step in treating a minor burn?",
        options: [
          "Apply ice",
          "Cool the burn under running water",
          "Apply butter",
          "Cover with a bandage",
        ],
        correctAnswer: 1,
      },
      {
        id: "fa2",
        text: "What is the recovery position?",
        options: [
          "Lying flat on your back",
          "A stable side position for unconscious breathing patients",
          "Sitting upright",
          "Standing up",
        ],
        correctAnswer: 1,
      },
      {
        id: "fa3",
        text: "What is CPR?",
        options: [
          "A medical degree",
          "A type of bandage",
          "Cardiopulmonary resuscitation",
          "A first aid kit",
        ],
        correctAnswer: 2,
      },
    ],
    certificateTemplate: "first-aid",
  },
];
