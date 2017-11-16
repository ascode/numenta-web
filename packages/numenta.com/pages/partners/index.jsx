// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from 'numenta-web-shared-components/lib/NextSection'
import {scrollToSection} from 'numenta-web-shared-utils/lib/client'
import Section from 'numenta-web-shared-components/lib/Section'

import MainSections, {getNextSection} from '../_MainSections'
import SectionPartners from './_Section'

const Default = (<SectionPartners key="sectionPartners" />)
const title = 'Partners'


/**
 * Partners Page - React view component.
 */
class PartnersPage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section headline={true} open={true} title={title}>
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollToSection(global.document.getElementById(Default.key))
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div>
        <Helmet title={title}>
          <meta name="twitter:title" content={title} />
          <meta
            name="twitter:description"
            content="Numenta works with strategic partners to bring the power of
            HTM to the market. While we focus on the science and the core
            technology, we select application partners who have deep domain
            knowledge and are able to add an application layer tuned to market
            needs"
          />
        </Helmet>
        {sections}
      </div>
    )
  }

}

export default PartnersPage