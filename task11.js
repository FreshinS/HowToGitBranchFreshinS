seconds = 3665;
minutes = seconds / 60;
secondsLast = seconds % 60;
hours = minutes / 60;
minutesLast = minutes % 60;

console.log(`${Math.round(hours)} ч ${Math.round(minutesLast)} мин ${Math.round(secondsLast)} сек`);