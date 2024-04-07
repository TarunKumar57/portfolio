import {Component} from 'react'
import {Link} from 'react-router-dom'
import {IoArrowForward, IoArrowBack} from 'react-icons/io5'

import {
  ProjectsContainer,
  TopContainer,
  ProjectsText,
  ProjectsListContainer,
  ProjectsListItem,
  ProjectName,
  ProjectDescription,
  ProjectLogo,
  VisitButton,
  VisitLink,
  ViewAllButton,
  TabsContainer,
  TabButton,
} from './styledComponents'

const projectsLists = [
  {
    id: '0',
    projectName: 'Insta Share',
    projectUrl: 'https://github.com/TarunKumar57/insta-share-app',
    description:
      'Implemented responsive Streaming Application like Instagram Clone.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712049873/Screenshot_2024-04-02_144754_zn8ayx.png',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '1',
    projectName: 'NxtWatch',
    projectUrl: 'https://github.com/TarunKumar57/nxt-watch-app',
    description:
      'Nxt Watch application which is a clone for YouTube developed using React js.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    siteText: 'Watch',
    categoryId: 'GITHUB',
  },
  {
    id: '2',
    projectName: 'Jobby App',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description:
      'Jobby App where users can see a list of jobs developed using React js',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/logo-img.png',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '3',
    projectName: 'Nxt Trendz',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description:
      'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    siteText: 'Shop',
    categoryId: 'GITHUB',
  },
  {
    id: '4',
    projectName: 'Rock Paper Scissors Game',
    projectUrl: 'https://github.com/TarunKumar57/rock-paper-scissors-game',
    description:
      'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712051204/Screenshot_2024-04-02_150900_fccyea.png',
    siteText: 'Play',
    categoryId: 'GITHUB',
  },
  {
    id: '5',
    projectName: 'Match Game',
    projectUrl: 'https://github.com/TarunKumar57/match-game',
    description:
      'Implemented Match App you can play this Game when ever you want.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png ',
    siteText: 'Play',
    categoryId: 'GITHUB',
  },
  {
    id: '6',
    projectName: 'IPL Dashboard',
    projectUrl: 'https://github.com/TarunKumar57/ipl-dashboard',
    description:
      'IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712045711/IPL-Logo_vn9n4s.jpg',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '7',
    projectName: 'Passwords Manager',
    projectUrl: 'https://github.com/TarunKumar57/passwords-manager',
    description:
      'Implemented Password manager application where users can add website passwords, search, delete and see passwords.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png ',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },
  {
    id: '8',
    projectName: 'Browser History',
    projectUrl: 'https://github.com/TarunKumar57/browser-history',
    description:
      'Implemented Browser history application which is a clone for google history where users can search and delete history.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png',
    siteText: 'Open',
    categoryId: 'GITHUB',
  },
  {
    id: '9',
    projectName: 'Portfolio',
    projectUrl: 'https://github.com/TarunKumar57/portfolio',
    description:
      'Developed a responsive web application for Portfolio where other people like interviewers can see about, education, list of projects, skills, contact info of mine',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'GITHUB',
  },

  {
    id: '11',
    projectName: 'Nxt Trendz',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description:
      'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    siteText: 'Shop',
    categoryId: 'SHOPPING',
  },

  {
    id: '41',
    projectName: 'Rock Paper Scissors Game',
    projectUrl: 'https://tksrpsgame.ccbp.tech/',
    description:
      'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712051204/Screenshot_2024-04-02_150900_fccyea.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '42',
    projectName: 'Match Game',
    projectUrl: 'https://tksmatchgame.ccbp.tech/',
    description:
      'Implemented Match App you can play this Game when ever you want.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '43',
    projectName: 'Emoji Game',
    projectUrl: 'https://tksemojigame.ccbp.tech/',
    description:
      'Implemented Rock Paper Scissors App you can play this Game when ever you want.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712380720/Screenshot_2024-04-06_104441_rtoqp1.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '44',
    projectName: 'Speedometer',
    projectUrl: 'https://tksspedometer.ccbp.tech/',
    description:
      'Implemented Speedometer App you can see speed while braking and accelerating.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/speedometer-img.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '45',
    projectName: 'Coin Toss Game',
    projectUrl: 'https://tkstossgame.ccbp.tech/',
    description:
      'Implemented Coin Toss Game you can play this Game when ever you want.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '46',
    projectName: 'Digital Timer App',
    projectUrl: 'https://tksdigitaltimer.ccbp.tech/',
    description: 'Implemented Digital Timer App you can see time.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/digital-timer-elapsed-bg.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '46.5',
    projectName: 'Stopwatch',
    projectUrl: 'https://tksstopwatch.ccbp.tech/',
    description: 'Implemented Stopwatch App you can set time.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '46.7',
    projectName: 'Gradient Generator',
    projectUrl: 'https://tksgrdientgnrtr.ccbp.tech/',
    description:
      'Implemented Gradient Generator App you can generate gradient colors.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '47',
    projectName: 'Random Number Generator',
    projectUrl: 'https://tksrndmnumgnrtr.ccbp.tech/',
    description:
      'Implemented Random Number Generator App you can generate random number.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/random-no-generator-bg.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '48',
    projectName: 'Letters Calculator',
    projectUrl: 'https://tksltrsclcltr.ccbp.tech/',
    description:
      'Implemented Letters Calculator App you can calculate no. of letters in word.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '49',
    projectName: 'Fruits Counter',
    projectUrl: 'https://tksfruitscount.ccbp.tech/',
    description:
      'Implemented Fruits Counter App you can play this Game when ever you want.',
    logoUrl: '',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '50',
    projectName: 'Click Counter',
    projectUrl: 'https://tkscliccounter.ccbp.tech/',
    description: 'Implemented Click Counter App you can count no. of clicks.',
    logoUrl: '  ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },
  {
    id: '51',
    projectName: 'Meme Generator',
    projectUrl: 'https://tksmemegeneratr.ccbp.tech/',
    description: 'Implemented Meme Generator App you can generate meme.',
    logoUrl: '  ',
    siteText: 'Play',
    categoryId: 'GAMING',
  },

  {
    id: '60',
    projectName: 'Insta Share',
    projectUrl: 'https://github.com/TarunKumar57/insta-share-app',
    description:
      'Implemented responsive Streaming Application like Instagram Clone.',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712049873/Screenshot_2024-04-02_144754_zn8ayx.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '61',
    projectName: 'NxtWatch',
    projectUrl: 'https://github.com/TarunKumar57/nxt-watch-app',
    description:
      'Nxt Watch application which is a clone for YouTube developed using React js.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '62',
    projectName: 'Jobby App',
    projectUrl: 'https://github.com/TarunKumar57/jobby-app',
    description:
      'Jobby App where users can see a list of jobs developed using React js',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/logo-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '63',
    projectName: 'Nxt Trendz',
    projectUrl: 'https://github.com/TarunKumar57/nxt-trendz-app',
    description:
      'Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '64',
    projectName: 'IPL Dashboard',
    projectUrl: 'https://github.com/TarunKumar57/ipl-dashboard',
    description:
      'IPL Dashboard app where users can list of ipl team, individual team details and respective team matches info',
    logoUrl:
      'https://res.cloudinary.com/dz881zzvx/image/upload/v1712045711/IPL-Logo_vn9n4s.jpg',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '65',
    projectName: 'CoWIN Dashboard',
    projectUrl: 'https://tkscowindshbord.ccbp.tech/',
    description: 'CoWIN Dashboard application developed using React js.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/cowin-logo.png ',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '66',
    projectName: 'Projects Showcase',
    projectUrl: 'https://tksprjctshwcase.ccbp.tech/',
    description: 'Projects Showcase App shows list of projects.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png ',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '67',
    projectName: 'Tech Era',
    projectUrl: 'https://tkstechera.ccbp.tech/',
    description:
      'Tech Era App where users can see a list of web tools using develope apps',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png ',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '68',
    projectName: 'Ebank',
    projectUrl: 'https://tksebank.ccbp.tech/ebank/',
    description: 'User ID: 142420, PIN: 231225 Ebank can login and logout ',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '69',
    projectName: 'Github Popular Repos',
    projectUrl: 'https://tksgitpoplrepos.ccbp.tech/',
    description:
      'Where user can see popular github repos and can be filtered through a selected programming language.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '70',
    projectName: 'Fetch And Routing Practice',
    projectUrl: 'https://tksftchndroutng.ccbp.tech/',
    description: 'Fetch And Routing list of blogs',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '71',
    projectName: 'Travel Guide',
    projectUrl: 'https://tkstravelguide.ccbp.tech/',
    description:
      'Travel Guide application which is a clone for traveling places.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },
  {
    id: '72',
    projectName: 'Authentication Functionality',
    projectUrl: 'https://tksathntctionfn.ccbp.tech/',
    description:
      'userName: rahul  , password: rahul@2021 , users can login and logout and navigate with route.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'API_REQUEST',
  },

  {
    id: '81',
    projectName: 'Meetup',
    projectUrl: 'https://tksmeetup.ccbp.tech/',
    description: 'Meetup App where users can register navigate to pages.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '82',
    projectName: 'Text Editor',
    projectUrl: 'https://tkstexteditor.ccbp.tech/',
    description: 'Text Editor App users can change font weight and style.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/text-editor-img.png ',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '83',
    projectName: 'Prime Video',
    projectUrl: 'https://tksprimevideo.ccbp.tech/',
    description: 'Implemented Prime Video App you can watch videos.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '21',
    projectName: 'Money Manager',
    projectUrl: 'https://tksmoneymanager.ccbp.tech/',
    description:
      'Money Manager App where you can see income, expenses and balance.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '22',
    projectName: 'Appointments App',
    projectUrl: 'https://tksapntmntapp.ccbp.tech/',
    description: 'Appointments App where you can add list of appointments.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '23',
    projectName: 'Comments App',
    projectUrl: 'https://tkscommentsapp.ccbp.tech/',
    description: 'Comments App where you can see and add list of comments.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '84',
    projectName: 'CCBP Timeline',
    projectUrl: 'https://tksccbptimeline.ccbp.tech/',
    description: 'CCBP Timeline App where users can see journey.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '85',
    projectName: 'Planets App',
    projectUrl: 'https://tksplanetsapp.ccbp.tech/',
    description: 'Planets App application developed using react-slick.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '86',
    projectName: 'My Tasks',
    projectUrl: 'https://tksmytasks.ccbp.tech/',
    description: 'My Tasks App you can add your tasks.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '88',
    projectName: 'Character Counter',
    projectUrl: 'https://tkscharcounter.ccbp.tech/',
    description: 'Character Counter App users can count no. of characters.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '89',
    projectName: 'Music Playlist',
    projectUrl: 'https://tksmusicplylist.ccbp.tech/',
    description: 'Implemented Music Playlist App you can see list of playlist.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '97',
    projectName: 'Registration Form',
    projectUrl: 'https://tksrgstrtionfrm.ccbp.tech/',
    description: 'Registration Form App where users can register here.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '98',
    projectName: 'Cryptocurrency Tracker',
    projectUrl: 'https://tkscryptocurenc.ccbp.tech/',
    description:
      'App where user can see available crypto currencies and their market price',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png ',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '25',
    projectName: 'App Store',
    projectUrl: 'https://tksappstore.ccbp.tech/',
    description: 'App Store where you can see and search list of apps.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '29',
    projectName: 'Google Search Suggestions',
    projectUrl: 'https://tksgglsrchsgstn.ccbp.tech/',
    description: 'Google search suggestions gives suggestions.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-logo.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '99',
    projectName: 'Routing Practice',
    projectUrl: 'https://tksroutngprctce.ccbp.tech/',
    description: 'Routing Practice App you can navigate with route.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '100',
    projectName: 'Blog List',
    projectUrl: 'https://tksbloglist.ccbp.tech/',
    description: 'Blog List App where you can see list of blogs.',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/profile-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '90',
    projectName: 'Multilingual Greetings',
    projectUrl: 'https://tksmltlnglgrtng.ccbp.tech/',
    description:
      'Multilingual Greetings App where you can greet in some languages.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '91',
    projectName: 'Editable Text Input',
    projectUrl: 'https://tkseditabletext.ccbp.tech/',
    description: 'Editable Text Input where users can edit text and save.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '92',
    projectName: 'Navbar with Context',
    projectUrl: 'https://tksnvbrwthcntxt.ccbp.tech/',
    description:
      'Navbar with Context users can change theme and navigate with route.',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '93',
    projectName: 'Layout Builder',
    projectUrl: 'https://tkslayoutbulder.ccbp.tech/',
    description: 'Implemented Layout Builder you can check layouts.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '94',
    projectName: 'Hamburger Menu',
    projectUrl: 'https://tkshamburgrmenu.ccbp.tech/',
    description: 'Hamburger Menu App where users can  navigate with route..',
    logoUrl:
      'https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '95',
    projectName: 'Alert Notifications',
    projectUrl: 'https://tksalrtntfction.ccbp.tech/',
    description: 'Alert Notifications App can see list of alerts.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '96',
    projectName: 'Events',
    projectUrl: 'https://tksevents.ccbp.tech/',
    description: 'Events App you can see list of events.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '87',
    projectName: 'Visit Countries',
    projectUrl: 'https://tksvstcountries.ccbp.tech/',
    description: 'Visit Countries App where users can list of countries.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '20',
    projectName: 'Faqs App',
    projectUrl: 'https://tksfaqsapp.ccbp.tech/',
    description: 'Faqs App where you can see list of faqs and answers.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '24',
    projectName: 'Reviews App',
    projectUrl: 'https://tksreviewsapp.ccbp.tech/',
    description: 'Reviews App where you can see reviews in carousel.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '26',
    projectName: 'Capitals App',
    projectUrl: 'https://tkscntrycptl.ccbp.tech/',
    description: 'Capitals App where you can see capitals of country.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '27',
    projectName: 'Gallery App',
    projectUrl: 'https://tksgalleryapp.ccbp.tech/',
    description: 'Gallery App where you can see list of photos.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '28',
    projectName: 'Feedback App',
    projectUrl: 'https://tksfeedbackapp.ccbp.tech/',
    description: 'Feedback App where you can give feedback.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '30',
    projectName: 'Cash Withdrawal',
    projectUrl: 'https://tkswithdrawal.ccbp.tech/',
    description:
      'Cash Withdrawal App where you can see remaining balance on withdraw.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '31',
    projectName: 'Simple Todos',
    projectUrl: 'https://tkssmpletodos.ccbp.tech/',
    description: 'Simple Todos where you can see and remove list of todos.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '32',
    projectName: 'Simple Login App',
    projectUrl: 'https://tksloginout.ccbp.tech/',
    description: 'Login App App where you can login and logout.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '33',
    projectName: 'Even Odd App',
    projectUrl: 'https://tksevenoddapp.ccbp.tech/',
    description:
      'Even Odd App where you can see generated number is even or odd.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '34',
    projectName: 'Show/Hide App',
    projectUrl: 'https://tksshowhideapp.ccbp.tech/',
    description: 'Show/Hide App where you can show or hide names.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '35',
    projectName: 'Welcome App',
    projectUrl: 'https://tkswelcomeapp.ccbp.tech/',
    description: 'Shows welcome text.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '36',
    projectName: 'Technology Cards',
    projectUrl: 'https://tkstechcards.ccbp.tech/',
    description: 'Technology Cards App where you can see introduction to tech.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
  {
    id: '37',
    projectName: 'Reusable Banners',
    projectUrl: 'https://tksrusblbnnr.ccbp.tech/',
    description: 'Reusable Banners App where you can see banners.',
    logoUrl: '',
    siteText: 'Visit',
    categoryId: 'OTHERS',
  },
]

const tabsList = [
  {tabId: 'GITHUB', displayText: 'Github'},
  {tabId: 'GAMING', displayText: 'Gaming'},
  {tabId: 'SHOPPING', displayText: 'Shopping'},
  {tabId: 'API_REQUEST', displayText: 'API Request'},
  {tabId: 'OTHERS', displayText: 'Others'},
]

const linkStyle = {
  textDecoration: 'none',
  color: '#f9f9f9',
}

class ProjectsList extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  clickTabItem = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsLists.filter(
      eachDetails => eachDetails.categoryId === activeTabId,
    )
    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    console.log(activeTabId)

    const filteredProjects = this.getFilteredProjects()

    return (
      <ProjectsContainer id="all-projects">
        <TopContainer>
          <ProjectsText>All Projects</ProjectsText>
          <TabsContainer>
            {tabsList.map(each => (
              <TabButton
                key={each.tabId}
                onClick={() => {
                  this.clickTabItem(each.tabId)
                }}
                isActive={activeTabId === each.tabId}
              >
                {each.displayText}
              </TabButton>
            ))}
          </TabsContainer>
          <ProjectsListContainer>
            {filteredProjects.map(each => (
              <ProjectsListItem key={each.id}>
                <ProjectLogo src={each.logoUrl} alt="logo" />
                <ProjectName>{each.projectName}</ProjectName>
                <ProjectDescription>{each.description}</ProjectDescription>
                <VisitButton>
                  <VisitLink href={each.projectUrl}>
                    {each.siteText} <IoArrowForward />
                  </VisitLink>
                </VisitButton>
              </ProjectsListItem>
            ))}
          </ProjectsListContainer>
          <Link to="./" style={linkStyle}>
            <ViewAllButton type="button">
              <IoArrowBack size={20} /> Home
            </ViewAllButton>
          </Link>
        </TopContainer>
      </ProjectsContainer>
    )
  }
}

export default ProjectsList
