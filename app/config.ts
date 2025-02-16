export const ORDERLY_SDK_DEMO_TITLE_KEY = 'orderly-sdk-demo-title';

export const OrderlyConfig = () => ({
  tradingViewConfig: {
    interval: '1D',
    timezone: 'Etc/UTC',
    container_id: 'tv_chart_container',
    library_path: '/charting_library/'
  }
});