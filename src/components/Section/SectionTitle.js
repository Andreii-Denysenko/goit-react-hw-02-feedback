import PropTypes from 'prop-types';
import { SectionTitle } from './SectionTitle.styled'

export function Section({title, children}){
    return (
<SectionTitle>
{title && <h1>{title}</h1>}
      {children}
</SectionTitle>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array,
  };