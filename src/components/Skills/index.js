import {Component} from 'react'
import ThemeContext from '../../context/themeContext'

import {
  SkillsContainer,
  TopContainer,
  SkillText,
  SkillsListContainer,
  SkillListItem,
  SkillName,
  SkillLogo,
} from './styledComponents'

const courses = [
  {
    id: '736d1108-d98b-482f-bfd6-234498c3571f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/html-logo-img.png',
    name: 'HTML',
  },
  {
    id: 'c51b4671-adc2-4487-9f8b-ddbac7bc5641',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/css-logo-img.png',
    name: 'CSS',
  },
  {
    id: '021354ec-68a2-4664-9e65-4e0c7d4a49bf',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/javascript-logo-img.png',
    name: 'JavaScript',
  },
  {
    id: '6738e64c-7237-4eb8-a833-c4720a257b86',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/flexbox-logo-img.png',
    name: 'Flexbox',
  },
  {
    id: '4f4556e1-41e3-4ba4-b25b-b908ac152377',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/react-logo-img.png',
    name: 'React JS',
  },
  {
    id: '63e56d59-8e04-42b4-837e-2cbdf1006123',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/react-native-logo-img.png',
    name: 'React Native',
  },
  //   {
  //     id: '29449033-de80-42a7-9f79-a26796240972',
  //     imageUrl:
  //       'https://assets.ccbp.in/frontend/react-js/tech-era/redux-logo-img.png',
  //     name: 'Redux',
  //   },
  //   {
  //     id: '817afe72-1409-4432-940b-e591867c51f1',
  //     imageUrl:
  //       'https://assets.ccbp.in/frontend/react-js/tech-era/vue.js-logo-img.png',
  //     name: 'Vue JS',
  //   },
  //   {
  //     id: '318a800f-242e-4381-a8e7-f2d82ed69b4e',
  //     imageUrl:
  //       'https://assets.ccbp.in/frontend/react-js/tech-era/next.js-logo-img.png',
  //     name: 'Next JS',
  //   },
  //   {
  //     id: '5ea856e7-d6f5-4196-9e91-cb7ed58ce483',
  //     imageUrl:
  //       'https://assets.ccbp.in/frontend/react-js/tech-era/angular.js-logo-img.png',
  //     name: 'Angular JS',
  //   },
  {
    id: '5f5aec41-2824-41ca-9884-4d64ed521d93',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/python-logo-img.png',
    name: 'Python',
  },
  {
    id: 'c612e7d1-39aa-4ee2-90f2-767fb0fc5f12',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/node.js-logo-img.png',
    name: 'Node JS',
  },
  //   {
  //     id: '10d7fa40-c605-4984-8227-07d327d07bd4',
  //     imageUrl:
  //       'https://assets.ccbp.in/frontend/react-js/tech-era/aws-logo-img.png',
  //     name: 'AWS',
  //   },
  {
    id: 'adb2bae6-7941-435e-8a72-ec20f75a7211',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/git-logo-img.png',
    name: 'Git',
  },
  //   {
  //     id: 'f8fa696e-10b1-4837-8c92-5f582e4f2b55',
  //     imageUrl:
  //       'https://assets.ccbp.in/frontend/react-js/tech-era/go-logo-img.png',
  //     name: 'Go',
  //   },
  {
    id: '2874d537-8877-455e-80e4-9c5d4eebbb5a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/tech-era/docker-logo-img.png',
    name: 'Docker',
  },
]

class Skills extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SkillsContainer id="skills">
              <TopContainer>
                <SkillText>Skills</SkillText>
                <SkillsListContainer>
                  {courses.map(each => (
                    <SkillListItem key={each.id}>
                      <SkillLogo src={each.imageUrl} alt={each.name} />
                      <SkillName isDark={isDarkTheme}>{each.name}</SkillName>
                    </SkillListItem>
                  ))}
                </SkillsListContainer>
              </TopContainer>
            </SkillsContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Skills
