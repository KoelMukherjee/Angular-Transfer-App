import { SortPipe } from './sort.pipe';
export const transfer_details = [
    {
        "ID": "5080157e-0f91-407f-834e-38407b8ded14",
        "account_holder": "Markus Bauer",
        "iban": "DE89 3704 0044 0532 0130 00",
        "amount": 111111,
        "date": "1992-11-03",
        "note": "Monthly Savings"
    },
    {
        "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
        "account_holder": "Maximillian Krueger",
        "iban": "DE69 3704 0012 0532 0965 00",
        "amount": 850,
        "date": "1988-09-05",
        "note": "House Rent "
    }];
export const asc = [
    {
        "ID": "5080157e-0f91-407f-834e-38407b8ded14",
        "account_holder": "Markus Bauer",
        "iban": "DE89 3704 0044 0532 0130 00",
        "amount": 111111,
        "date": "1992-11-03",
        "note": "Monthly Savings"
    },
    {
        "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
        "account_holder": "Maximillian Krueger",
        "iban": "DE69 3704 0012 0532 0965 00",
        "amount": 850,
        "date": "1988-09-05",
        "note": "House Rent "
    }];
export const desc = [
    {
        "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
        "account_holder": "Maximillian Krueger",
        "iban": "DE69 3704 0012 0532 0965 00",
        "amount": 850,
        "date": "1988-09-05",
        "note": "House Rent "
    },
    {
        "ID": "5080157e-0f91-407f-834e-38407b8ded14",
        "account_holder": "Markus Bauer",
        "iban": "DE89 3704 0044 0532 0130 00",
        "amount": 111111,
        "date": "1992-11-03",
        "note": "Monthly Savings"
    }];

describe('SortPipe', () => {
    it('create an instance', () => {
        const pipe = new SortPipe();
        expect(pipe).toBeTruthy();
    });
    it('should sort transfer details', () => {

        const pipe = new SortPipe();

        const resultAsc = pipe.transform(transfer_details, 'asc');

        const resultDec = pipe.transform(transfer_details, 'desc');
        expect(resultAsc).toEqual(asc);


    });
});
