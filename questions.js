const questions = [
{
    question: "[EASY] What does CPU stand for?",
    answers: [
        "Central Processing Unit",
        "Computer Power Unit",
        "Central Program Utility",
        "Core Processing Utility"
    ],
    correct: 0,
    explanation: "CPU stands for Central Processing Unit. It is the main processor that executes instructions and performs calculations."
},

{
    question: "[MEDIUM] Which number is the binary representation of decimal 10?",
    answers: [
        "1001",
        "1010",
        "1110",
        "1100"
    ],
    correct: 1,
    explanation: "10 in decimal equals 1010 in binary (8 + 2 = 10)."
},

{
    question: "[EASY] Which memory is the fastest?",
    answers: [
        "HDD",
        "SSD",
        "RAM",
        "L1 Cache"
    ],
    correct: 3,
    explanation: "L1 Cache is built directly into the CPU, making it much faster than RAM, SSDs, or HDDs."
},

{
    question: "[MEDIUM] If A = 1 and B = 0, what is A AND B?",
    answers: [
        "0",
        "1",
        "10",
        "Undefined"
    ],
    correct: 0,
    explanation: "An AND gate outputs 1 only when BOTH inputs are 1. Since B is 0, the result is 0."
},

{
    question: "[EASY] Which component permanently stores files even when the computer is turned off?",
    answers: [
        "RAM",
        "CPU",
        "SSD",
        "Cache"
    ],
    correct: 2,
    explanation: "An SSD is non-volatile storage, meaning it keeps data even when the power is off."
},

{
    question: "[HARD] What is hexadecimal 0xFF in decimal?",
    answers: [
        "250",
        "254",
        "255",
        "256"
    ],
    correct: 2,
    explanation: "FF = (15 × 16) + 15 = 240 + 15 = 255."
},

{
    question: "[EASY] What does RAM stand for?",
    answers: [
        "Random Access Memory",
        "Read Access Memory",
        "Rapid Access Module",
        "Read Application Memory"
    ],
    correct: 0,
    explanation: "RAM stands for Random Access Memory. It temporarily stores data that the CPU is actively using."
},

{
    question: "[MEDIUM] Which logic gate outputs 1 only when the inputs are different?",
    answers: [
        "AND",
        "OR",
        "XOR",
        "NOT"
    ],
    correct: 2,
    explanation: "XOR (Exclusive OR) outputs 1 only when exactly one input is 1."
},

{
    question: "[EASY] What is ASCII primarily used for?",
    answers: [
        "Storing images",
        "Representing text characters",
        "Compressing files",
        "Encrypting passwords"
    ],
    correct: 1,
    explanation: "ASCII assigns numbers to letters, digits, punctuation, and control characters so computers can represent text."
},

{
    question: "[EASY] Which component connects all of the major parts of a computer together?",
    answers: [
        "Power Supply",
        "Motherboard",
        "Graphics Card",
        "CPU Cooler"
    ],
    correct: 1,
    explanation: "The motherboard is the main circuit board that connects the CPU, RAM, storage, graphics card, and other hardware."
},

{
    question: "[MEDIUM] What is the primary function of a GPU?",
    answers: [
        "Managing internet traffic",
        "Rendering graphics and parallel processing",
        "Providing stable voltage to the CPU",
        "Compiling high-level programming code"
    ],
    correct: 1,
    explanation: "GPUs are designed to rapidly manipulate and alter memory to accelerate the creation of images, making them legends for gaming and AI."
},

{
    question: "[HARD] In networking, what does the acronym TCP stand for?",
    answers: [
        "Transfer Control Protocol",
        "Transmission Control Protocol",
        "Transport Core Protocol",
        "Telecommunication Connection Protocol"
    ],
    correct: 1,
    explanation: "TCP stands for Transmission Control Protocol, which ensures reliable, ordered, and error-checked delivery of streams of octets between applications."
},

{
    question: "[ULTRA-HARD] How many bits are in a standard IPv4 address?",
    answers: [
        "16 bits",
        "32 bits",
        "64 bits",
        "128 bits"
    ],
    correct: 1,
    explanation: "An IPv4 address is 32 bits long, usually written as four octets separated by dots (e.g., 192.168.1.1)."
},

{
    question: "[MEDIUM] What does BIOS stand for?",
    answers: [
        "Basic Input/Output System",
        "Built-In Operating Structure",
        "Binary Internal Operation Software",
        "Basic Internet Operational Standard"
    ],
    correct: 0,
    explanation: "BIOS stands for Basic Input/Output System, responsible for initializing hardware during the booting process."
},

{
    question: "[HARD] Which sorting algorithm typically has the best average-case time complexity of O(n log n)?",
    answers: [
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Selection Sort"
    ],
    correct: 2,
    explanation: "Merge Sort is a divide-and-conquer algorithm that consistently hits O(n log n) time complexity, unlike Bubble Sort which lags at O(n²)."
},

{
    question: "[ULTRA-HARD] What is the IEEE 754 standard used for in computing?",
    answers: [
        "Representing floating-point numbers",
        "Defining Ethernet frame structures",
        "Encrypting wireless network data",
        "Standardizing USB port pinouts"
    ],
    correct: 0,
    explanation: "IEEE 754 is the technical standard for floating-point computation, establishing formats for representing real numbers in binary."
},

{
    question: "[MEDIUM] Which protocol is securely used to load web pages over an encrypted connection?",
    answers: [
        "HTTP",
        "FTP",
        "HTTPS",
        "SMTP"
    ],
    correct: 2,
    explanation: "HTTPS (Hypertext Transfer Protocol Secure) uses SSL/TLS encryption to keep your web browsing safe from prying eyes."
},

{
    question: "[HARD] What is the maximum value that can be stored in a single unsigned 8-bit integer?",
    answers: [
        "127",
        "128",
        "255",
        "256"
    ],
    correct: 2,
    explanation: "An unsigned 8-bit integer ranges from 0 to 255."
},

{
    question: "[ULTRA-HARD] In object-oriented programming, what term describes the mechanism of wrapping data and methods into a single unit?",
    answers: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction"
    ],
    correct: 2,
    explanation: "Encapsulation bundles the data and the methods that operate on that data within a single unit, hiding the internal state from the outside world."
},

{
    question: "[MEDIUM] Which open-source operating system kernel is the foundation for Android and Ubuntu?",
    answers: [
        "Windows NT",
        "Darwin",
        "Linux",
        "Unix"
    ],
    correct: 2,
    explanation: "The Linux kernel powers everything from embedded devices and Android phones to massive cloud servers and Ubuntu desktop distributions!"
}
];
