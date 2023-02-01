import {useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ROUTE_PATH, TAB_ROUTE_PATH} from '@/entry/router';

type RoutePaths = Valueof<typeof ROUTE_PATH>;

type RouterParams = Record<RoutePaths, any>;

type NavigateParams<T extends RoutePaths> = T extends 'home'
  ? {
      screen: Valueof<typeof TAB_ROUTE_PATH>;
      params: RouterParams[T];
    }
  : RouterParams[T];

/** 路由参数Hook */
export function useParams<T extends RoutePaths>(): RouterParams[T] {
  const route = useRoute<any>();
  const routeParams = route?.params as RouterParams[T];
  return routeParams;
}

/** 导航 */
export function useNavigate() {
  const navigation = useNavigation<any>();
  const navigate = useCallback(
    function <T extends RoutePaths>(route: T, params?: NavigateParams<T>) {
      navigation.navigate(route, params);
    },
    [navigation],
  );
  return navigate;
}
