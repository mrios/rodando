import { notification } from 'antd';

type NotificationType = {
  type: 'success' | 'info' | 'error' | 'warning' | undefined;
  message: string;
  description: string;
  duration?: number;
};

const notifyIcon = ({
  type,
  message,
  description,
  duration,
}: NotificationType) => {
  const args = {
    type: type,
    message: message,
    description: description,
    duration: duration ? duration : 4.5,
  };

  notification.open(args);
};

export default notifyIcon;
