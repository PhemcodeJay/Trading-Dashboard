
import { useState } from 'react';
import { TradingHeader } from '@/components/TradingHeader';
import { TradingPanel } from '@/components/TradingPanel';
import { MarketData } from '@/components/MarketData';
import { OrderBook } from '@/components/OrderBook';
import { MarketHistory } from '@/components/MarketHistory';
import { NewsFeed } from '@/components/NewsFeed';
import { WalletOverview } from '@/components/WalletOverview';

const Index = () => {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');
  const [orderType, setOrderType] = useState('Market');

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <TradingHeader />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - Trading Panel */}
          <div className="lg:col-span-1">
            <TradingPanel 
              selectedPair={selectedPair}
              setSelectedPair={setSelectedPair}
              orderType={orderType}
              setOrderType={setOrderType}
            />
          </div>

          {/* Center Column - Charts and Market Data */}
          <div className="lg:col-span-2 space-y-6">
            <WalletOverview />
            <MarketData selectedPair={selectedPair} />
          </div>

          {/* Right Column - Order Book and News */}
          <div className="lg:col-span-1 space-y-6">
            <OrderBook />
            <NewsFeed />
            <MarketHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
