import { Link } from 'react-router-dom';

const EmptyPage: React.FC = () => {
  return (
    <div>
      Hi World!
      <Link to="/">Link to empty page</Link>
    </div>
  )
}

export default EmptyPage
