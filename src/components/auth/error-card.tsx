import BackButton from '@/components/auth/back-button';
import Header from '@/components/auth/header';
import {Card, CardFooter, CardHeader} from '@/components/ui/card';

function ErrorCard() {
  return (
    <Card className="w-[400px] shadow-sm">
      <CardHeader>
        <Header label="Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
}

export default ErrorCard;
