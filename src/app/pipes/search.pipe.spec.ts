import { SearchPipe } from './search.pipe';
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
export const search_result = [{
    "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
    "account_holder": "Maximillian Krueger",
    "iban": "DE69 3704 0012 0532 0965 00",
    "amount": 850,
    "date": "1988-09-05",
    "note": "House Rent "
}];
describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return the searched string', () => {

    const pipe = new SearchPipe();

    const result = pipe.transform(transfer_details, 'House Rent');
    expect(result).toEqual(search_result);


});
});
