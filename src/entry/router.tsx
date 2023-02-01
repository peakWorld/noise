import MusicCollect from '@/pages/musicCollect'; // Tab-歌单列表页
import MusicLocal from '@/pages/musicLocal'; // Tab-本地音乐管理
import MusicOnline from '@/pages/musicLocal'; // Tab-远程音乐管理

import MusicPlay from '@/pages/musicPlay'; // 音乐播放页

import MusicList from '@/pages/musicList'; // 音乐列表页
import MusicSearch from '@/pages/musicSearch'; // 音乐搜索页

import Setting from '@/pages/setting'; // 侧边栏, 个人配置

import Home from './tabBottom'; // Tab首页

type IRoutes<T extends Record<string, string>> = {
  path: Valueof<T>;
  component: (...args: any[]) => JSX.Element;
  options?: Record<string, any>; // 页面相关配置
};

type ITabRoutes<T extends Record<string, string>> = IRoutes<T> & {
  tabIcon: string;
};

/**
 * 主路由
 */
export const ROUTE_PATH = {
  Home: 'home',
  MusicList: 'music-list',
  MusicPlay: 'music-play',
  MusicSearch: 'music-search',
} as const;

/**
 * Modal弹窗路由
 */
export const Modal_ROUTE_PATH = {} as const;

/**
 * Tab路由
 */
export const TAB_ROUTE_PATH = {
  MusicCollect: 'music-collect',
  MusicLocal: 'music-local',
  MusicOnline: 'music-online',
  Setting: 'setting',
} as const;

export const routes: Array<IRoutes<typeof ROUTE_PATH>> = [
  {
    path: ROUTE_PATH.MusicPlay,
    component: MusicPlay,
  },
  {
    path: ROUTE_PATH.Home,
    component: Home,
    options: {
      headerShown: false,
    },
  },
  {
    path: ROUTE_PATH.MusicList,
    component: MusicList,
  },
  {
    path: ROUTE_PATH.MusicSearch,
    component: MusicSearch,
  },
];

export const ModalRoutes: Array<IRoutes<typeof Modal_ROUTE_PATH>> = [];

export const TabRoutes: Array<ITabRoutes<typeof TAB_ROUTE_PATH>> = [
  {
    path: TAB_ROUTE_PATH.MusicCollect,
    component: MusicCollect,
    options: {
      // headerShown: false,
      title: '歌单',
    },
    tabIcon: 'albums',
  },
  {
    path: TAB_ROUTE_PATH.MusicLocal,
    component: MusicLocal,
    options: {
      headerShown: false,
      title: '本地音频',
    },
    tabIcon: 'document',
  },
  {
    path: TAB_ROUTE_PATH.MusicOnline,
    component: MusicOnline,
    options: {
      headerShown: false,
      title: '线上音频',
    },
    tabIcon: 'cloud',
  },
  {
    path: TAB_ROUTE_PATH.Setting,
    component: Setting,
    options: {
      headerShown: false,
      title: '设置',
    },
    tabIcon: 'person',
  },
];
