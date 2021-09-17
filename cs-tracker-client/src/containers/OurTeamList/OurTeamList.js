import React from 'react'
import OurTeamMember from '../../components/OurTeamMember/OurTeamMember'

const OurTeamList = () => {
  const ourTeamData = [
    {
      id: 1,
      name: 'Siddharth Singh',
      details: 'Pune University',
      githubUrl: 'https://github.com/Siddharth9890',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com',
      imageUrl:
        'https://w7.pngwing.com/pngs/315/90/png-transparent-computer-icons-programming-language-computer-programming-html-element-code-miscellaneous-logo-code.png',
    },
    {
      id: 2,
      name: 'Shreyas Bansode',
      detail: 'Pune University',
      githubUrl: 'https://github.com/sanedroid6006',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com',
      imageUrl:
        'https://w7.pngwing.com/pngs/315/90/png-transparent-computer-icons-programming-language-computer-programming-html-element-code-miscellaneous-logo-code.png',
    },
    {
      id: 3,
      name: 'Varandeep Bhalla',
      detail: 'Pune University',
      githubUrl: 'https://github.com/varan5',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com',
      imageUrl:
        'https://w7.pngwing.com/pngs/315/90/png-transparent-computer-icons-programming-language-computer-programming-html-element-code-miscellaneous-logo-code.png',
    },

  ]

  return (
    <div>
      {ourTeamData.map(
        ({
          id,
          name,
          details,
          githubUrl,
          linkedinUrl,
          twitterUrl,
          imageUrl,
        }) => {
          return (
            <OurTeamMember
              key={id}
              id={id}
              name={name}
              details={details}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
              twitterUrl={twitterUrl}
              imageUrl={imageUrl}
            />
          )
        }
      )}
    </div>
  )
}

export default OurTeamList
