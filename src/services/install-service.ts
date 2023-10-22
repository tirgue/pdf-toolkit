interface BeforeInstallPromptEvent extends Event {
    prompt: CallableFunction;
    userChoice: Promise<{ outcome: string }>;
}

export class InstallService {
    static DEFERRED_PROMPT: BeforeInstallPromptEvent | undefined;

    static register(): void {
        window.addEventListener("beforeinstallprompt", (e) => {
            this.DEFERRED_PROMPT = e as BeforeInstallPromptEvent;
        });
    }

    static async triggerInstall(): Promise<void> {
        if (!this?.DEFERRED_PROMPT) return;

        this.DEFERRED_PROMPT.prompt();
        const { outcome } = await this.DEFERRED_PROMPT.userChoice;
        if (outcome === "accepted") {
            this.DEFERRED_PROMPT = undefined;
        }
    }
}
