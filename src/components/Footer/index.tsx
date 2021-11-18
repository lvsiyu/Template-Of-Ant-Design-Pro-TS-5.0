import { DefaultFooter } from '@ant-design/pro-layout';
import { companyText, removeDefaultFooterPage } from '@/utils/common';

const Footer: React.FC = () => {
  const path = window.location.hash.substr(1);
  if (path && removeDefaultFooterPage && removeDefaultFooterPage.length > 0) {
    for (let i = 0; i < removeDefaultFooterPage.length; i += 1) {
      if (path === removeDefaultFooterPage[i]) {
        return null;
      }
    }
  }
  return (
    <DefaultFooter
      copyright={false}
      links={[
        {
          key: '1',
          title: companyText,
          href: 'https://github.com/lvsiyu/Template-Of-Ant-Design-Pro-TS-5.0',
          blankTarget: true,
        },
        /* {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'Ant Design',
          href: 'https://ant.design',
          blankTarget: true,
        }, */
      ]}
    />
  );
};

export default Footer;
