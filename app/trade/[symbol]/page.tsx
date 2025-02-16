import { TradingPage, OrderlyAppProvider } from "@orderly.network/react";
import { ConnectorProvider } from "@orderly.network/web3-onboard";
import "@orderly.network/react/dist/styles.css";

export default function Trading({ params }: { params: { symbol: string } }) {
    const [symbol, setSymbol] = useState("PERP_ETH_USDC");
    return (
    <ConnectorProvider
      apiKey="<Your web3-onboard's api key>"
      options={`<options>`}
    >
      <OrderlyAppProvider
        networkId="testnet"
        brokerId="<Your broker id>"
        brokerName="<Your name>"
        appIcons={...}
      >
        <TradingPage
          symbol={symbol}
          tradingViewConfig={`tradingView config`}
          onSymbolChange={(symbol) => {
            setSymbol(symbol.symbol);
          }}
        />
      </OrderlyAppProvider>
    </ConnectorProvider>
  );
}