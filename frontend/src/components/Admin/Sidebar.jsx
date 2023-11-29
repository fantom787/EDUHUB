import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      padding={'16'}
      boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    >
      <LinkButton
        url={'dashboard'}
        Icon={RiDashboardFill}
        text={'Dashboard'}
        currentLocation={location.pathname}
      />
      <LinkButton
        url={'createcourse'}
        Icon={RiAddCircleFill}
        text={'Create Course'}
        currentLocation={location.pathname}
      />
      <LinkButton
        url={'courses'}
        Icon={RiEyeFill}
        text={'Courses'}
        currentLocation={location.pathname}
      />
      <LinkButton
        url={'users'}
        Icon={RiUser3Fill}
        text={'Users'}
        currentLocation={location.pathname}
      />
    </VStack>
  );
};

export default Sidebar;

const LinkButton = ({ url, Icon, text, currentLocation }) => {
  const fullUrl = `/admin/${url}`;
  return (
    <Link to={fullUrl}>
      <Button
        colorScheme={fullUrl === currentLocation ? 'purple' : ''}
        fontSize={'larger'}
        variant={'ghost'}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
};
