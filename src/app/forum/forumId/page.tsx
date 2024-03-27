import React from 'react';

interface Props {
  params: {
    forumId: string;
  };
}

const AfficherMessage: React.FC<Props> = ({ params }) => {
  return <h1>forum, message {params.forumId}</h1>;
};

export default AfficherMessage;
