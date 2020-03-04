const DEFAULT_PROJECTS = [
  {
    name: 'Binary-to-Decimal Converter',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md',
  },
  {
    name: 'Border Radius Previewer',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md',
  },
  {
    name: 'Calculator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md',
  },
  {
    name: 'Christmas Lights',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Christmas-Lights-App.md',
  },
  {
    name: 'Cause Effect App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md',
  },
  {
    name: 'Color Cycle',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Color-Cycle-App.md',
  },
  {
    name: 'Countdown Timer',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Countdown-Timer-App.md',
  },
  {
    name: 'CSV2JSON App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/CSV2JSON-App.md',
  },
  {
    name: 'Dollars to Cents',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Dollars-To-Cents-App.md',
  },
  {
    name: 'Dynamic CSS Variables',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Dynamic-CSSVar-app.md',
  },
  {
    name: 'First DB App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/First-DB-App.md',
  },
  {
    name: 'Flip Image',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Flip-Image-App.md',
  },
  {
    name: 'GitHub Status',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/GitHub-Status-App.md',
  },
  {
    name: 'Hello',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Hello-App.md',
  },
  {
    name: 'IOT Mailbox Simulator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/IOT-Mailbox-App.md',
  },
  {
    name: 'JS Input Validation',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Javascript-Validation-With-Regex.md',
  },
  {
    name: 'JSON2CSV App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/JSON2CSV-App.md',
  },
  {
    name: 'Key Value',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Key-Value-App.md',
  },
  {
    name: 'Lorem Ipsum Generator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Lorem-Ipsum-Generator.md',
  },
  {
    name: 'Notes App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Notes-App.md',
  },
  {
    name: 'Pearson Regression',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Pearson-Regression-App.md',
  },
  {
    name: 'Pomodoro Clock',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Pomodoro-Clock.md',
  },
  {
    name: 'Product Landing Page',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Product-Landing-Page.md',
  },
  {
    name: 'Quiz App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Quiz-App.md',
  },
  {
    name: 'Recipe App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Recipe-App.md',
  },
  {
    name: 'Random Meal Generator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Random-Meal-Generator.md',
  },
  {
    name: 'Roman to Decimal Converter',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Roman-to-Decimal-Converter.md',
  },
  {
    name: 'Slider Design',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Slider-Design.md',
  },
  {
    name: 'Stopwatch App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Stopwatch-App.md',
  },
  {
    name: 'TrueOrFalse',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/True-or-False-App.md',
  },
  {
    name: 'Vigenere Cipher',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Vigenere-Cipher.md',
  },
  {
    name: 'Wind Chill',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Windchill-App.md',
  },
  {
    name: 'Word Frequency',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Word-Frequency-App.md',
  },
  {
    name: 'Weather App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Weather-App.md',
  },
  {
    name: 'Bit Masks',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Bit-Masks-App.md',
  },
  {
    name: 'Book Finder App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md',
  },
  {
    name: 'Calculator CLI',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Calculator-CLI.md',
  },
  {
    name: 'Card Memory Game',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Card-Memory-Game.md',
  },
  {
    name: 'Charity Finder App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Charity-Finder-App.md',
  },
  {
    name: 'Chrome Theme Extension',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Chrome-Theme-Extension.md',
  },
  {
    name: 'Drawing App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Drawing-App.md',
  },
  {
    name: 'Emoji Translator App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Emoji-Translator-App.md',
  },
  {
    name: 'Flashcards App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/FlashCards-App.md',
  },
  {
    name: 'Flip Art App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Flip-Art-App.md',
  },
  {
    name: 'Game Suggestion App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Game-Suggestion-App.md',
  },
  {
    name: 'GitHub Profiles',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/GitHub-Profiles.md',
  },
  {
    name: 'HighStriker Game',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/HighStriker-Game.md',
  },
  {
    name: 'Image Scanner',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Image-Scaner.md',
  },
  {
    name: 'Markdown Previewer',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Markdown-Previewer.md',
  },
  {
    name: 'Markdown Table Generator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Markdown-Table-Generator.md',
  },
  {
    name: 'Math Editor',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/math-editor.md',
  },
  {
    name: 'Meme Generator App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Meme-Generator-App.md',
  },
  {
    name: 'Name Generation using RNNs',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Name-Generator.md',
  },
  {
    name: 'Password Generator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Password-Generator.md',
  },
  {
    name: 'Podcast Directory',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Podcast-Directory-App.md',
  },
  {
    name: 'QR Code Badge Generator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/QRCode-Badge-App.md',
  },
  {
    name: 'Regular Expression Helper',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/RegExp-Helper-App.md',
  },
  {
    name: 'Sales Reciepts App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Sales-DB-App.md',
  },
  {
    name: 'Simple Online Store',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Simple-Online-Store.md',
  },
  {
    name: 'Sports Bracket Generator',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Sports-Bracket-Generator.md',
  },
  {
    name: 'String Art',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/String-Art.md',
  },
  {
    name: 'This or That Game',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/This-or-That-Game.md',
  },
  {
    name: 'Timezone Slackbot',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Timezone-Slackbot.md',
  },
  {
    name: 'To-Do App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/To-Do-App.md',
  },
  {
    name: 'Typing Practice',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Typing-Practice-App.md',
  },
  {
    name: 'Voting App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Voting-App.md',
  },
  {
    name: 'Battleship Bot',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Bot.md',
  },
  {
    name: 'Battleship Game Engine',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Battleship-Game-Engine.md',
  },
  {
    name: 'Boole Bots Game',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Boole-Bot-Game.md',
  },
  {
    name: 'Calendar',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md',
  },
  {
    name: 'Calorie Counter',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Calorie-Counter-App.md',
  },
  {
    name: 'Chat App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Chat-App.md',
  },
  {
    name: 'Contribution Tracker App',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Contribution-Tracker-App.md',
  },
  {
    name: 'Elevator',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Elevator-App.md',
  },
  {
    name: 'Fast Food Simulator',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/FastFood-App.md',
  },
  {
    name: 'Instagram Clone',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Instagram-Clone-App.md',
  },
  {
    name: 'GitHub Timeline',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/GitHub-Timeline-App.md',
  },
  {
    name: 'Kudos Slackbot',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Kudos-Slackbot.md',
  },
  {
    name: 'Movie App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Movie-App.md',
  },
  {
    name: 'MyPodcast Library',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/MyPodcast-Library-app.md',
  },
  {
    name: 'NASA Exoplanet Query',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/NASA-Exoplanet-Query.md',
  },
  {
    name: 'Shell Game',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Shell-Game.md',
  },
  {
    name: 'Shuffle Deck',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Shuffle-Deck-App.md',
  },
  {
    name: 'Slack Archiver',
    url:
      'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Slack-Archiver.md',
  },
  {
    name: 'Spell-It App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/SpellIt-App.md',
  },
  {
    name: 'Survey App',
    url: 'https://github.com/florinpop17/app-ideas/blob/master/Projects/3-Advanced/Survey-App.md',
  },
  {
    name: 'Find PI to the Nth Digit',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Find e to the Nth Digit',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Fibonacci Sequence',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Prime Factorization',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Next Prime Number',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Find Cost of Tile to Cover W x H Floor',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Mortgage Calculator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Change Return Program',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Binary to Decimal and Back Converter',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Calculator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Unit Converter (temp, currency, volume, mass and more)',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Alarm Clock',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Distance Between Two Cities',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Credit Card Validator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Tax Calculator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Factorial Finder',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Complex Number Algebra',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Happy Numbers',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Number Names',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Coin Flip Simulation',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Limit Calculator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Fast Exponentiation',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Collatz Conjecture',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Sorting',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Closest pair problem',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Sieve of Eratosthenes',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Graph from links',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Eulerian Path',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Connected Graph',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Dijkstra’s Algorithm',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Minimum Spanning Tree',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Inverted index',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Fizz Buzz',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Reverse a String',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Pig Latin',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Count Vowels',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Check if Palindrome',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Count Words in a String',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Text Editor',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'RSS Feed Creator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Quote Tracker (market symbols etc)',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Guestbook / Journal',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Vigenere / Vernam / Ceasar Ciphers',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Regex Query Tool',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'FTP Program',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Bandwidth Monitor',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Port Scanner',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Mail Checker (POP3 / IMAP)',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Country from IP Lookup',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Whois Search Tool',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Site Checker with Time Scheduling',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Product Inventory Project',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Airline / Hotel Reservation System',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Company Manager',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Bank Account Manager',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Patient / Doctor Scheduler',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Recipe Creator and Manager',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Image Gallery',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Shape Area and Perimeter Classes',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Flower Shop Ordering To Go',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Family Tree Creator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Create A Progress Bar for Downloads',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Bulk Thumbnail Creator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Page Scraper',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Online White Board',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Get Atomic Time from Internet Clock',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Fetch Current Weather',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Scheduled Auto Login and Action',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'E-Card Generator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Content Management System',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Web Board (Forum)',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'CAPTCHA Maker',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Quiz Maker',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Sort Excel/CSV File Utility',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Create Zip File Maker',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'PDF Generator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Mp3 Tagger',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Code Snippet Manager',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'SQL Query Analyzer',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Remote SQL Tool',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Report Generator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Event Scheduler and Calendar',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Budget Tracker',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'TV Show Tracker',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Travel Planner System',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Slide Show',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Stream Video from Online',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Mp3 Player',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Watermarking Application',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Turtle Graphics',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'GIF Creator',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Caesar cipher',
    url: 'https://github.com/karan/Projects',
  },
  {
    name: 'Intermittent Fasting App',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'News Aggregator',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'Online Store Using External APIs',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'Wish List App UsingExternal APIs for Products',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'Advert Board',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'Reservation App',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'Serverless Community Forum',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
  {
    name: 'Chatroom Using Cloud Services',
    url: 'https://medium.com/@PurpleGreenLemon/10-coding-prompts-for-your-portfolio-4a5266d86ede',
  },
];

export default DEFAULT_PROJECTS;
