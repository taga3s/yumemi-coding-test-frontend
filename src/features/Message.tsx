import { FC } from 'react';

import { messageLayout } from './Message.css';

type Props = {
  message: string;
};

const Message: FC<Props> = (props) => {
  const { message } = props;
  return <span className={messageLayout}>{message}</span>;
};

export { Message };
