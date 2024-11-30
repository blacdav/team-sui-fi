/*
/// Module: contracts
module contracts::contracts;
*/

// module Contribution::Contribution {
//     use sui
// }

address 0x1 {
    module MyToken {
        use 0x1::Coin;

        struct Token has store {
            balance: u64,
        }

        public fun initialize(account: &signer, amount: u64) {
            let token = Token { balance: amount };
            move_to(account, token);
        }

        public fun mint(account: &signer, amount: u64) {
            let token = borrow_global_mut<Token>(signer::address_of(account));
            token.balance = token.balance + amount;
        }

        public fun get_balance(account: address): u64 {
            let token = borrow_global<Token>(account);
            return token.balance;
        }

        public fun transfer(from: &signer, to: address, amount: u64) {
            let from_token = borrow_global_mut<Token>(signer::address_of(from));
            assert!(from_token.balance >= amount, 0x1::Error::InsufficientBalance);

            let to_token = borrow_global_mut<Token>(to);
            from_token.balance = from_token.balance - amount;
            to_token.balance = to_token.balance + amount;
        }
    }
}
