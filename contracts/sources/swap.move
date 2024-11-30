address 0x1 {
    module TokenSwap {
        use 0x1::Coin;
        use 0x1::MyToken;

        // Define the address of the custom token module
        const TOKEN_ADDRESS: address = 0x1; // Replace with your token address
        const EXCHANGE_RATE: u64 = 100; // Define how many of your tokens are given per 1 SUI (e.g., 100 tokens per SUI)

        public fun swap_sui_for_tokens(account: &signer, amount: u64) {
            // Ensure that the user is sending SUI
            let amount_in_sui = Coin::withdraw(account, amount);
            assert!(amount_in_sui > 0, 0x1::Error::InvalidAmount);

            // Calculate how many tokens to mint (based on exchange rate)
            let tokens_to_mint = amount * EXCHANGE_RATE;

            // Mint custom tokens
            MyToken::mint(account, tokens_to_mint);

            // Emit event (optional, for logging purposes)
            emit_event(account, amount_in_sui, tokens_to_mint);
        }

        // Helper function to emit event for tracking
        fun emit_event(account: &signer, amount_in_sui: u64, tokens_minted: u64) {
            // Emitting event for logging purposes, can be used for off-chain monitoring
            debug::print(&"Swap Event: User swapped SUI for tokens", amount_in_sui, tokens_minted);
        }
    }
}
